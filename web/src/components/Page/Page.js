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
  background: ${COLORS.gray900};
  color: ${COLORS.textLight};
  height: 100%;
  overflow: auto;
`;

const Main = styled.main``;

export default Page;
