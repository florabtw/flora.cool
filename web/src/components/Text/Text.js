import styled from "styled-components";

const Text = ({ children }) => {
  return <Styled>{children}</Styled>;
};

const Styled = styled.p`
  line-height: 1.75;

  & + & {
    margin-top: 1.5rem;
  }
`;

export default Text;
