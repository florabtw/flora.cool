import styled from "styled-components/macro";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: hsl(0 0% 20%);
  color: white;
  height: 100%;
`;

const Main = styled.main``;

export default Page;
