import styled from "styled-components/macro";

const Section = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 800px;
  padding: 32px 24px;
`;

export default Section;
