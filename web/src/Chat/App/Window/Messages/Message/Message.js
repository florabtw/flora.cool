import styled from "styled-components";

import { COLORS } from "constants.js";

const STYLES = {
  received: {
    "--align-self": "flex-start",
    "--background": COLORS.gray600,
    "--color": COLORS.textLight,
  },
  sent: {
    "--align-self": "flex-end",
    "--background": COLORS.primaryLight,
    "--color": COLORS.textDark,
  },
};

const Message = ({ children, type }) => {
  const style = STYLES[type];

  return <MessageBubble style={style}>{children}</MessageBubble>;
};

const MessageBubble = styled.li`
  align-self: var(--align-self);
  background: var(--background);
  border-radius: 24px;
  box-shadow: 0px 2px 4px hsl(0 0% 0% / 0.2);
  color: var(--color);
  max-width: 80%;
  padding: 8px 16px;
`;

export default Message;
