import styled from "styled-components";
import ReactDOM from "react-dom";

import Bubble from "./Bubble";
import Draggable from "components/Draggable";
import Frame from "./Frame";

const Chat = () => {
  const handleClick = () => {
    console.log("Click!");
  };

  return ReactDOM.createPortal(
    <Overlay>
      <Draggable>
        <Bubble onClick={handleClick} />
        <Frame>
          <ol>
            <li>Hello world!</li>
            <li>Hi back!</li>
          </ol>
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
