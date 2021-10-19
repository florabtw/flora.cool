import styled from "styled-components";
import ReactDOM from "react-dom";

import Bubble from "./Bubble";

const Chat = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <Bubble />
      <ChatBox>
        <ol>
          <li>Hello world!</li>
          <li>Hi back!</li>
        </ol>
      </ChatBox>
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

const ChatBox = styled.div`
  display: none;
`;

export default Chat;
