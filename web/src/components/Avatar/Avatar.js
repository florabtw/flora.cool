import styled from "styled-components";

import { COLORS } from "constants.js";
import { ReactComponent as Image } from "./avatar.svg";

const SIZES = {
  small: { "--size": "60px" },
  large: { "--size": "120px" },
};

const Avatar = ({ className, onClick, size = "small" }) => {
  const style = { ...SIZES[size] };

  return (
    <Wrapper className={className} onClick={onClick} style={style}>
      <StyledImage aria-label="Flora's witch avatar" role="image" />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  background: ${COLORS.gray700};
  border-radius: 50%;
  display: block;
  height: var(--size);
  width: var(--size);
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

export default Avatar;
