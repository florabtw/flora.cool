import styled from "styled-components";

import { COLORS } from "constants.js";
import avatar from "./avatar.webp";

const SIZES = {
  small: { "--size": "60px" },
  large: { "--size": "120px" },
};

const Avatar = ({ className, onClick, size = "small" }) => {
  const style = { ...SIZES[size] };

  return (
    <Wrapper className={className} onClick={onClick} style={style}>
      <StyledImg src={avatar} />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  background: ${COLORS.primaryLight};
  border-radius: 50%;
  display: block;
  height: var(--size);
  width: var(--size);
`;

const StyledImg = styled.img`
  border-radius: 50%;
  height: 100%;
  width: 100%;
`;

export default Avatar;
