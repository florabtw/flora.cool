import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <ol>
        <li>Hello world!</li>
        <li>Hi back!</li>
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: white;
`;

export default App;
