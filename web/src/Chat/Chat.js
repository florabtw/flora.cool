import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from "./App";
import Bubble from "./Bubble";
import Draggable from "components/Draggable";
import Frame from "./Frame";
import useChat from "Chat/Context";
import useWindowSize from "./hooks";
import { BREAKPOINTS } from "constants.js";

const Chat = () => {
  const { open } = useChat();
  const windowSize = useWindowSize();

  const isStretch = windowSize.width < BREAKPOINTS.chat.stretch;
  const position = isStretch && open && { x: "50%", y: "38px" };

  return ReactDOM.createPortal(
    <Overlay>
      <Draggable
        defaultPosition={{
          x: windowSize.width - 50,
          y: windowSize.height - 50,
        }}
        position={position}
      >
        <Bubble />
        <Frame>
          <App />
        </Frame>
      </Draggable>
    </Overlay>,
    document.getElementById("chat")
  );
};

const Overlay = styled.div`
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
`;

export default Chat;
