import styled from "styled-components";

import { COLORS } from "constants.js";

import Header from "./Header";
import InputArea from "./InputArea";
import Messages from "./Messages";

const App = () => {
  return (
    <Wrapper role="dialog" aria-labelledby="chat-heading">
      <Header />
      <Messages />
      <InputArea />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textLight};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
