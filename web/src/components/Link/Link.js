import styled from "styled-components";

import { COLORS } from "constants.js";

const Link = ({ children, to }) => {
  return <Styled href={to}>{children}</Styled>;
};

const Styled = styled.a`
  color: ${COLORS.primaryLight};
`;

export default Link;
