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
          Flora Moon
        </Heading>
        <Text>
          Hello! My name is Flora Moon, but it hasn't always been. I am a newly
          out trans woman and this is my website. I am also a software engineer
          looking for full-time remote employment, but my physical body will be
          in Los Angeles. Thanks for visiting my website!
        </Text>
        <Text>
          Unfortunately, links don't work here so I will have to guide you
          around myself. If you'd like to learn more about me or my work, click
          on my face to get started!
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
