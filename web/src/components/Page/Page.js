import styled from "styled-components/macro";

import { COLORS } from "constants.js";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: hsl(0 0% 15%);
  color: ${COLORS.textLight};
  height: 100%;
`;

const Main = styled.main``;

export default Page;
