import styled from "styled-components";

import Avatar from "components/Avatar";
import Heading from "components/Heading";
import Page from "components/Page";
import Section from "components/Section";
import Text from "components/Text";
import useChat from "Chat/Context";

const Home = () => {
  const { setOpen: setChatOpen } = useChat();

  return (
    <Page>
      <SectionStyled>
        <PortraitImage onClick={() => setChatOpen((o) => !o)} size="large" />
        <Heading align="center" level={1}>
          Flora Moon
        </Heading>
        <Text>
          Hello! My name is Flora Moon, but it hasn't always been. I am a newly
          out trans woman and this is my website. I am also a software engineer
          looking for full-time remote employment, but my physical body will be
          in Los Angeles. Thanks for visiting my site!
        </Text>
        <Text>
          Unfortunately, my navigation bar seems to have gone missing, so I will
          have to guide you around myself. If you'd like to learn more about me
          or my work, click on my face to get started!
        </Text>
      </SectionStyled>
    </Page>
  );
};

const PortraitImage = styled(Avatar)`
  cursor: pointer;
  margin: 0 auto;

  &:hover {
    transform: scale(1.05);
  }
`;

const SectionStyled = styled(Section)`
  padding-top: 80px;
`;

export default Home;
