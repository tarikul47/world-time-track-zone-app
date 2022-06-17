import React, { useState } from "react";
import { intialvalues } from "../../utils/utils";
import Button from "../UI/Button/Button";
import Container from "../UI/Container/Container";
import FlexBox from "../UI/FlexBox/FlexBox";
import FormGroup from "../UI/Form/FormGroup";
import Input from "../UI/Form/Input";
import Message from "../UI/Form/Message";
import Select from "../UI/Form/Select";
import Grid from "../UI/Grid/Grid";
import timezone from "../../public/timezone.json";
import Clock from "./SingleClock";

const Clocks = ({
  clocks,
  handleSubmitForm,
  errors,
  eventFormValues,
  setEventFormValues,
  handleDeleteClock,
  handleEditClock,
  second,
}) => {
 // const [show, setShow] = useState(false);

  /**
   * Event form on chnage function
   */
  const handleFormChange = (e) => {
    setEventFormValues({
      ...eventFormValues,
      [e.target.name]: e.target.value,
    });

   // console.log(e.target.name, e.target.value);
  };

  /**
   * City dropdown list
   */
  let optionItems = timezone.map((zone) => (
    <option value={zone.Timezone} key={zone.Timezone}>
      {zone.Timezone}
    </option>
  ));

  return (
    <>
      <Container>
        <FlexBox alignItems="flex-start" justifyContent="flex-end">
          <h4 className="title">Add Your Clcok with an Event!!!</h4>
        </FlexBox>
          <form action="" method="POST" onSubmit={handleSubmitForm}>
            <FlexBox flexDirection="row">
              <FormGroup>
                <Input
                  type="text"
                  value={eventFormValues.event}
                  name="event"
                  id="label"
                  placeholder="Enter event name"
                  onChange={handleFormChange}
                />
                <Message><b>{errors.event}</b></Message>
              </FormGroup>
              <FormGroup>
                <Input
                  type="time"
                  value={eventFormValues.eventTime}
                  placeholder="Enter event time"
                  name="eventTime"
                  onChange={handleFormChange}
                />
                <Message><b>{errors.eventTime}</b></Message>
              </FormGroup>
              <FormGroup>
                <Select
                  name="zone"
                  value={eventFormValues.zone}
                  onChange={handleFormChange}
                >
                  <option value="">Select Time Zone</option>
                  {optionItems}
                </Select>
                <Message><b>{errors.zone}</b></Message>
              </FormGroup>
              <FormGroup>
                <Input cursor="pointer" type='submit' value={eventFormValues.id ? 'Update': 'Submit'}/>
              </FormGroup>
            </FlexBox>
          </form>
      </Container>
      <Container>
        <Grid>
          {clocks.length === 0 ? (
            <h2 className="title">There is no Clock</h2>
          ) : (
            clocks.map((item) => (
              <Clock
                handleDeleteClock={handleDeleteClock}
                handleEditClock={handleEditClock}
                item={item}
                key={item.id}
                value={item}
                second={second}
                //setShow={setShow}
              />
            ))
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Clocks;
