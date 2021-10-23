import styled from "styled-components";

const Header = () => {
  return (
    <Styled>
      <Heading id="chat-heading">
        <span aria-label="flower" role="img">
          🌷
        </span>{" "}
        Flora Moon{" "}
        <span aria-label="moon" role="img">
          🌙
        </span>
      </Heading>
    </Styled>
  );
};

const Styled = styled.header`
  box-shadow: 0px 2px 4px hsl(0deg 0% 0% / 0.4);
  padding: 14px 16px;
  text-align: center;
`;

const Heading = styled.h2`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.125rem;
  margin: 0;
  padding: 0;
`;

export default Header;
