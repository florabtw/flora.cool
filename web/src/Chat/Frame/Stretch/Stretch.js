import React from "react";
import styled from "styled-components";

import Base from "../Base";

const Stretch = ({ children, open }) => {
  const [display, setDisplay] = React.useState(open ? "block" : "none");

  React.useEffect(() => {
    if (open) {
      setTimeout(() => setDisplay("block"), 200);
    } else {
      setDisplay("none");
    }
  }, [open]);

  const style = {
    "--display": display,
  };

  return <Styled style={style}>{children}</Styled>;
};

const Styled = styled(Base)`
  bottom: 8px;
  display: var(--display);
  left: 0;
  margin: 0 auto;
  position: fixed;
  top: calc(60px + 16px);
  right: 0;
  width: calc(100vw - 16px);
`;

export default Stretch;
