import FlexBox from "../../UI/FlexBox/FlexBox";
import FormGroup from "../../UI/Form/FormGroup";
import Input from "../../UI/Form/Inputr";
import Label from "../../UI/Form/Lable";
import Message from "../../UI/Form/Message";
import Select from "../../UI/Form/Select";

const message = "this is the validation message";

const Form = () => {
  return (
    <div className="form-conatiner">
      <form action="">
        <FlexBox flexDirection="row">
          <FormGroup>
            <Input type="text" id="label" placeholder="Enter event name" />
            {/* <Message>This is the validation message</Message> */}
          </FormGroup>
          <FormGroup>
            <Input type="time" placeholder="Enter event time"/>
            {/* <Message>This is the validation message</Message> */}
          </FormGroup>
          <FormGroup>
            <Select>
              <option value="">Please Enter Name</option>
              <option value="">Please Enter Name</option>
              <option value="">Please Enter Name</option>
              <option value="">Please Enter Name</option>
            </Select>
            {/* <Message>This is the validation message</Message> */}
          </FormGroup>
          <FormGroup>
            <Input type="submit" />
          </FormGroup>
        </FlexBox>
      </form>
    </div>
  );
};

export default Form;
