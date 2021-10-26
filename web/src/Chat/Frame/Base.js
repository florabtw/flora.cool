import styled from "styled-components";

import { COLORS } from "constants.js";

const Base = styled.div`
  background: ${COLORS.gray700};
  border-radius: 8px;
  pointer-events: initial;
  filter: drop-shadow(0px 4px 8px hsl(0deg 0% 0% / 0.6));
  z-index: 1;
`;

export default Base;
