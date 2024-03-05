import styled from "styled-components";

const StyledInput = styled.input`
  height: 42px;
  width: 100%;
  border: solid 1px var(--tab-select-color);
  background-color: transparent;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
`;
const StyledInputImage = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  background-color: transparent;
  color: #26334d;
  width: 100%;
  box-sizing: border-box;
`;
// box-shadow: -5px 15px 15px 0px rgba(41, 74, 113, 0.05);
const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  font-size: 14px;
  color: #26334d;
  width: 100%;
  box-sizing: border-box;
`;



export { StyledInput, StyledInputImage, StyledFormDiv };

