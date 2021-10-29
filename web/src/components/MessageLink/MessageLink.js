import styled from "styled-components";

import { COLORS } from "constants.js";
import useChat from "Chat/Context";
import { ReactComponent as ChatBubble } from "./ChatBubble.svg";

const MessageLink = ({ children, message }) => {
  const { sendMessage, setOpen } = useChat();

  const handleClick = () => {
    setOpen(true);
    sendMessage(message);
  };

  return (
    <Styled onClick={handleClick}>
      {children}
      <ChatBubble aria-label="message bubble" role="img" />
    </Styled>
  );
};

const Styled = styled.button`
  background: none;
  border: none;
  color: ${COLORS.textPrimary};
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  padding: 0;
  user-select: inherit;

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    height: 1em;
    vertical-align: middle;
  }
`;

export default MessageLink;
