import React from "react";
import styled, { keyframes } from "styled-components";

import useChat from "Chat/Context";
import Message from "./Message";
import flora from "Flora";

const Messages = () => {
  const [typing, setTyping] = React.useState(false);
  const { messages } = useChat();

  React.useEffect(() => {
    const handleTyping = (isTyping) => setTyping(isTyping);

    flora.addEventListener("typing", handleTyping);
    return () => flora.removeEventListener("typing", handleTyping);
  }, []);

  return (
    <KeepScrollBottom>
      <MessageList>
        {messages.map(({ text, type }, i) => (
          <Message key={i} type={type}>
            {text}
          </Message>
        ))}
        {typing && <TypingIndicator />}
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

const TypingIndicator = () => (
  <Message type="received">
    <Wiggle aria-label="Flora is typing..." role="img">
      ✏️
    </Wiggle>
  </Message>
);

const wiggle = keyframes`
  from {
    left: -1px;
  }
  to {
    left: 3px;
  }
`;

const Wiggle = styled.span`
  animation: ${wiggle} 300ms linear infinite alternate;
  display: inline-block;
  padding: 0px 2px;
  position: relative;
`;

export default Messages;
