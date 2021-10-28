import React from "react";
import styled from "styled-components";

import Message from "./Message";
import Status from "./Status";
import flora from "Flora";
import useChat from "Chat/Context";

const Messages = () => {
  const [status, setStatus] = React.useState("none");
  const { messages } = useChat();

  React.useEffect(() => {
    const handleStatus = (status) => setStatus(status);

    flora.addEventListener("status", handleStatus);
    return () => flora.removeEventListener("status", handleStatus);
  }, []);

  const StatusIndicator = Status[status];

  return (
    <KeepScrollBottom>
      <MessageList>
        {messages.map(({ text, type }, i) => (
          <Message key={i} type={type}>
            {text}
          </Message>
        ))}

        <StatusIndicator />
      </MessageList>
    </KeepScrollBottom>
  );
};

/* A simple trick to 'stick' the scroll to the bottom of the content */
const KeepScrollBottom = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow: auto;

  /* Not part of the trick - needed for layout */
  flex: 1;
`;

const MessageList = styled.ol`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  list-style: none;
  margin: 0;
  padding: 16px;

  /* Bug workaround instead of justify-content: flex-end */
  /* https://stackoverflow.com/a/37515194/1868119 */
  & li:first-child {
    margin-top: auto;
  }
`;

export default Messages;
