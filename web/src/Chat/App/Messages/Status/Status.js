import styled, { keyframes } from "styled-components";

import Message from "../Message";

const Dice = (() => {
  const spin = keyframes`
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    `;

  const Spin = styled.span`
    animation: ${spin} 1s linear infinite;
    display: inline-block;
  `;

  return () => (
    <Message type="received">
      <Spin aria-label="Flora is rolling a die..." role="img">
        🎲
      </Spin>
    </Message>
  );
})();

const None = () => null;

const Typing = (() => {
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

  return () => (
    <Message type="received">
      <Wiggle aria-label="Flora is typing..." role="img">
        ✏️
      </Wiggle>
    </Message>
  );
})();

const Status = { dice: Dice, none: None, typing: Typing };

export default Status;
