import styled from "styled-components";

import Message from "./Message";

const Messages = () => {
  return (
    <MessageList>
      <Message type="received">
        Hi! What can I help you find? Try typing "projects", "resume", or
        "contact info".
      </Message>
      <Message type="sent">projects</Message>
    </MessageList>
  );
};

const MessageList = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  grid-gap: 8px;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 16px;
`;

export default Messages;
