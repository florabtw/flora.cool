import styled from "styled-components";
import { COLORS } from "constants.js";

import { ReactComponent as SendIcon } from "./send.svg";

const InputArea = () => {
  return (
    <Wrapper>
      <TextInput focus type="text" />
      <SubmitButton>
        <SendIcon />
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  grid-gap: 8px;
  padding: 16px 12px;
`;

const TextInput = styled.input`
  background: hsl(0 0% 35%);
  border-radius: 20px;
  box-shadow: 0px 4px 8px hsl(0 0% 0% / 0.6);
  border: none;
  color: inherit;
  height: 40px;
  font-size: 1rem;
  flex: 1;
  padding: 0px 12px;
  width: 0px;

  &:focus-visible {
    outline: 2px solid ${COLORS.primaryLight};
  }
`;

const SubmitButton = styled.button`
  background: ${COLORS.primary};
  border-radius: 20px;
  border: none;
  box-shadow: 0px 4px 8px hsl(0 0% 0% / 0.6);
  color: ${COLORS.textLight};
  cursor: pointer;
  font-weight: bold;
  display: flex;
  flex: 0 0 40px;

  &:focus-visible {
    outline: 2px solid ${COLORS.primaryLight};
  }

  &:hover {
    position: relative;
    overflow: hidden;

    &::after {
      background: white;
      bottom: 0;
      content: "";
      left: 0;
      opacity: 0.04;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  svg {
    margin: auto;
    position: relative;
    left: 2px;
  }
`;

export default InputArea;
