import styled from "styled-components";

const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 20%;
  margin: ${(props)=> props.margin ?? '50px auto'};
`;

export default FormGroup;
