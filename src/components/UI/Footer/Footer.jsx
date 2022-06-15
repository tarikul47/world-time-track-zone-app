import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "center"};
  flex-direction: ${(props) => props.flexDirection ?? "column"};
  background-color: #000103;
  color: #fff;
  height: 50px;
`;

export default Footer; 