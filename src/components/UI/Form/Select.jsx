import styled from "styled-components";

const Select = styled.select`
  padding: 0.5em;
  color: #222;
  background: #fff;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default Select;
