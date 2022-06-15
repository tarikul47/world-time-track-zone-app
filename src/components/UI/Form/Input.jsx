import styled from "styled-components";
const Input = styled.input`
  padding: 0.5em;
  color: #222;
  background: #fff;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  cursor: ${(props) => props.cursor ?? "auto"};
  position: relative;
  font-size: 1em;
`;
export default Input;
