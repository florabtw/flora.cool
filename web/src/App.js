import { createGlobalStyle } from "styled-components";

import { ChatProvider } from "Chat/Context";
import Home from "./Home";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }

  html, body {
    color-scheme: dark;
    font-family: 'Open Sans', sans-serif;
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100%;
  }

  #root {
    height: 100%;
  }
`;

const App = () => {
  return (
    <ChatProvider>
      <GlobalStyle />
      <Home />
    </ChatProvider>
  );
};

export default App;
