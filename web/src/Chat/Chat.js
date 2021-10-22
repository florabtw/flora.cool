import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import App from "./App";
import Bubble from "./Bubble";
import Draggable from "components/Draggable";
import Frame from "./Frame";
import useWindowSize from "./hooks";
import { BREAKPOINTS } from "constants.js";

const Chat = () => {
  const [open, setOpen] = React.useState(false);
  const windowSize = useWindowSize();

  const handleClick = () => setOpen((o) => !o);

  const isStretch = windowSize.width < BREAKPOINTS.chat.stretch;
  const position = isStretch && open && { x: "50%", y: "38px" };

  return ReactDOM.createPortal(
    <Overlay>
      <Draggable
        defaultPosition={{ x: 1, y: 10 }}
        position={position}
        role="dialog"
      >
        <Frame open={open}>
          <App />
        </Frame>
        <Bubble onClick={handleClick} />
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
