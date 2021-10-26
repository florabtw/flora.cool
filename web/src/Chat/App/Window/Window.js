import React from "react";
import styled from "styled-components";

import Header from "./Header";
import InputArea from "./InputArea";
import Messages from "./Messages";
import { COLORS } from "constants.js";

const Window = ({ messages, onSend }) => {
  return (
    <Wrapper role="dialog" aria-labelledby="chat-heading">
      <Header />
      <Messages messages={messages} />
      <InputArea onSend={onSend} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textLight};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default Window;
