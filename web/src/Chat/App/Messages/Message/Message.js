import styled from "styled-components";

import { COLORS } from "constants.js";

const STYLES = {
  received: {
    "--align-self": "flex-start",
    "--background": COLORS.primaryLight,
    "--color": COLORS.textDark,
  },
  sent: {
    "--align-self": "flex-end",
    "--background": "hsl(0 0% 35%)",
    "--color": COLORS.textLight,
  },
};

const Message = ({ children, type }) => {
  const style = STYLES[type];

  return <MessageBubble style={style}>{children}</MessageBubble>;
};

const MessageBubble = styled.div`
  align-self: var(--align-self);
  background: var(--background);
  border-radius: 24px;
  box-shadow: 0px 2px 4px hsl(0 0% 0% / 0.2);
  color: var(--color);
  max-width: 80%;
  padding: 8px 12px;
`;

export default Message;
