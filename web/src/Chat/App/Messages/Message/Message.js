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
  /* Used by <Attachment /> */
  --inline-padding: 16px;
  --block-padding: 8px;

  align-self: var(--align-self);
  background: var(--background);
  border-radius: 24px;
  box-shadow: 0px 2px 4px hsl(0 0% 0% / 0.2);
  color: var(--color);
  line-height: 1.5;
  max-width: 85%;
  overflow: hidden;
  padding: var(--block-padding) var(--inline-padding);
`;

export default Message;
