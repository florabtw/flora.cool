import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import styled from "styled-components";
import { COLORS } from "constants.js";

import { ReactComponent as SendIcon } from "./send.svg";

const InputArea = ({ onSend }) => {
  const [message, setMessage] = React.useState("");

  const handleChange = (event) => setMessage(event.target.value);

  const handleSubmit = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <Wrapper>
      <VisuallyHidden as="label" htmlFor="chat-input">
        Message
      </VisuallyHidden>
      <TextInput
        id="chat-input"
        onChange={handleChange}
        type="text"
        value={message}
      />
      <SubmitButton onClick={handleSubmit}>
        <VisuallyHidden>Send</VisuallyHidden>
        <SendIcon aria-hidden />
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
