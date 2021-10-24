import React from "react";
import styled from "styled-components";

import Header from "./Header";
import InputArea from "./InputArea";
import Messages from "./Messages";
import flora from "Flora";
import { COLORS } from "constants.js";

const App = () => {
  const [messages, setMessages] = React.useState([]);

  const handleNewMessage = React.useCallback(
    ({ text, type }) => setMessages((ms) => ms.concat([{ text, type }])),
    []
  );

  React.useEffect(() => {
    const handleMessage = (text) =>
      handleNewMessage({ text, type: "received" });

    flora.addEventListener("message", handleMessage);
    return () => flora.removeEventListener("message", handleMessage);
  }, [handleNewMessage]);

  const handleSend = (text) => {
    handleNewMessage({ text, type: "sent" });
    flora.send(text);
  };

  return (
    <Wrapper role="dialog" aria-labelledby="chat-heading">
      <Header />
      <Messages messages={messages} />
      <InputArea onSend={handleSend} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textLight};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
