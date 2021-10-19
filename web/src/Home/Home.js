import styled from "styled-components";

import Avatar from "components/Avatar";
import Heading from "components/Heading";
import Page from "components/Page";
import Section from "components/Section";

const Home = () => {
  return (
    <Page>
      <SectionStyled>
        <PortraitImage size="large" />
        <Heading align="center" level={1}>
          Home
        </Heading>
        <Text>
          Welcome to Flora's slice of the internet. Here you can enter a chat
          with me to learn more about me. Click on my face to get started!
        </Text>
      </SectionStyled>
    </Page>
  );
};

const PortraitImage = styled(Avatar)`
  margin: 0 auto;
`;

const SectionStyled = styled(Section)`
  padding-top: 80px;
`;

const Text = styled.p`
  line-height: 1.5;
`;

export default Home;
