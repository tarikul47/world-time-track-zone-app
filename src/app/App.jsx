import { useEffect, useState } from "react";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import FlexBox from "../components/UI/FlexBox/FlexBox";
import FormGroup from "../components/UI/Form/FormGroup";
import Header from "../components/UI/Header/Header";
import Select from "../components/UI/Form/Select";
import Input from "../components/UI/Form/Input";
import {
  getTimezoneOffset,
  intialvalues,
  guid,
  defaultClcoks,
} from "../utils/utils";
import Clocks from "../components/Clocks/Clocks";
import timezone from "../public/timezone.json";

/**
 * City dropdown list
 */
let optionItems = timezone.map((zone) => (
  <option value={zone.Timezone} key={zone.Timezone}>
    {zone.Timezone}
  </option>
));

const App = () => {
  const [open, setOpen] = useState(false);

  // For Clcok running
  const [second, setSeconds] = useState(new Date().getTime());
  // Form state
  const [defaultFormState, setDefaultFormState] = useState({
    zone: "Asia/Dhaka",
  });

  // default Clock state
  const [defaultClock, setdefaultClock] = useState({ zone: "Asia/Dhaka" });

  /**
   * Clock evert form state
   */
  const [eventFormValues, setEventFormValues] = useState({ ...intialvalues });

  // even form error handler
  const [errors, setErrors] = useState({ ...intialvalues });

  // clocks store
  const [clocks, setClocks] = useState(defaultClcoks);

  //console.log(clocks);
  /**
   * Clcok second run
   */
  const tick = () => {
    setSeconds(new Date().getTime());
  };
  /**
   * Useeffect for clcok
   */
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      console.log("Clcok is shuthdown");
      clearInterval(interval);
    };
  }, []);

  /**
   * Deafult Clock form slect on change event
   */
  const handleDefaultFormSelectChange = (e) => {
    console.log(e.target.name, e.target.value);
    setDefaultFormState({
      ...defaultFormState,
      [e.target.name]: e.target.value,
    });
  };

  /**
   *  default Form Sumbit Handler
   */
  const defaultFormSumbitHandler = (e) => {
    e.preventDefault();
    const newDefaultClock = {
      zone: defaultFormState.zone,
    };
    setdefaultClock({ ...newDefaultClock });
  };

  /**
   * Form Validation
   */

  const checkValidity = (values) => {
    const errors = {};
    const { event, eventTime, zone } = values;
    if (!event) {
      errors.event = "Invalid Event";
    }
    if (!eventTime) {
      errors.eventTime = "Invalid Event Time";
    }
    if (!zone) {
      errors.zone = "Invalid zone";
    }
    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  /**
   * Event for submit function
   */

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setErrors({ ...intialvalues });
    const { isValid, errors } = checkValidity(eventFormValues);
    const { id, zone, event, eventTime } = eventFormValues;

   // console.log(id, zone, event, eventTime);

    // validation check
    if (isValid) {
      console.log("Yes validation passed ");

      if (!id) {
        console.log("id has no - new clock need to added");
        setClocks([
          {
            id: guid.next().value,
            ...eventFormValues,
          },
          ...clocks,
        ]);
        setEventFormValues({ ...intialvalues });
      } else {
        console.log("id got =  need to update the clock");
        // find the object
        const updateObj = clocks.filter((item) => item.id === id);

        // update faild when try to update zone
        if (updateObj[0]["zone"] === eventFormValues.zone) {
          // update the object
          updateObj[0]["event"] = eventFormValues.event;
          updateObj[0]["eventTime"] = eventFormValues.eventTime;
          //updateObj[0]["zone"] = eventFormValues.zone;
        } else {
          alert("Sorry!!! you can't update Clock Zone");
        }

        //console.log(updateObj[0]["zone"]);
        //console.log(eventFormValues.zone);
        //console.log(updateObj[0]["zone"] === eventFormValues.zone);
      }
    } else {
      // isvalide condition
      setErrors({ ...errors });
    }
  };

  /**
   * Single Clock delete operation
   */
  const handleDeleteClock = (id) => {
    if (confirm("Are You Sure! Do you want to delete the Clock? ")) {
      setClocks(clocks.filter((item) => item.id != id));
    }
  };

  /**
   * Single Clock delete operation
   */
  const handleEditClock = (uid) => {
    //setShow((prev) => (prev === false ? true : false));
    //console.log(id);
    const updateClock = clocks.filter((item) => item.id === uid);
    //console.log(c[0].zone, c[0].event, c[0].eventTime);
    const { id, event, eventTime, zone } = updateClock[0];

    const updateFormValue = {
      id: id,
      event: event,
      eventTime: eventTime,
      zone: zone,
    };

    // update form data
    setEventFormValues({
      ...updateFormValue,
    });
  };

  return (
    <>
      <Container>
        <Header>
          <FlexBox justifyContent="center">
            <h1>Time Tracking World Clock</h1>
            <span>
              <b> Time : </b>
              <span>
                {new Date(second).toLocaleTimeString("en-US", {
                  timeZone: defaultClock.zone,
                })}
              </span>
            </span>
            <span>
              <b>City : </b>
              {defaultClock.zone.split("/")[1]}
            </span>
            <span>
              {getTimezoneOffset(defaultClock.zone, new Date(2016, 0, 1))}
            </span>
            <span></span>
            <Button
              onClick={() => setOpen((prev) => (prev === false ? true : false))}
            >
              {open ? "Close" : "Edit Your Time Zone"}
            </Button>
          </FlexBox>
          {open && (
            <form action="" onSubmit={defaultFormSumbitHandler}>
              <FlexBox flexDirection="row">
                <FormGroup margin="20px 10px">
                  <Select
                    name="zone"
                    value={defaultClock.eventTime}
                    onChange={handleDefaultFormSelectChange}
                  >
                    <option value="">Select Time Zone</option>
                    {optionItems}
                  </Select>
                  {/* <Message>This is the validation message</Message> */}
                </FormGroup>
                <FormGroup margin="20px 10px">
                  <Input type="submit" />
                </FormGroup>
              </FlexBox>
            </form>
          )}
        </Header>
      </Container>
      <Clocks
        errors={errors}
        handleSubmitForm={handleSubmitForm}
        clocks={clocks}
        eventFormValues={eventFormValues}
        setEventFormValues={setEventFormValues}
        handleDeleteClock={handleDeleteClock}
        handleEditClock={handleEditClock}
        second={second}
      ></Clocks>
    </>
  );
};

export default App;
