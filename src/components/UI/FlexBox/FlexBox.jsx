import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  align-items: ${(props)=>(props.alignItems ?? 'center')};
  justify-content: ${(props)=>(props.justifyContent ?? 'center')};
  flex-direction: ${(props)=>(props.flexDirection ?? 'column')};
  
`;

export default FlexBox;
