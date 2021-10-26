import styled from "styled-components";

const HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

const ALIGN = {
  left: { "--text-align": "left" },
  center: { "--text-align": "center" },
};

const LEVEL = {
  1: {
    "--font-size": "2.5rem",
  },
  2: {
    "--font-size": "2rem",
  },
};

const Heading = ({ align = "left", children, level = 1 }) => {
  const tag = HEADINGS[level - 1];

  const style = { ...ALIGN[align], ...LEVEL[level] };

  return (
    <Styled as={tag} style={style}>
      {children}
    </Styled>
  );
};

const Styled = styled.h1`
  font-family: "Fira Sans", sans-serif;
  font-size: var(--font-size);
  margin: 0.5em 0;
  text-align: var(--text-align, left);
`;

export default Heading;
