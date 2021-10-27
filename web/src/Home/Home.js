import styled from "styled-components";

import Avatar from "components/Avatar";
import Heading from "components/Heading";
import MessageLink from "components/MessageLink";
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
          out{" "}
          <MessageLink message="Can I ask about your transition?">
            trans woman
          </MessageLink>{" "}
          (she/they) and this is my{" "}
          <MessageLink message="How did you built this site?">
            website
          </MessageLink>
          . I am also a{" "}
          <MessageLink message="Where have you worked?">
            software engineer
          </MessageLink>
          looking for full-time remote{" "}
          <MessageLink message="Can I hire you?">employment</MessageLink>, but
          my physical body will be in{" "}
          <MessageLink message="Where else have you lived?">
            Los Angeles
          </MessageLink>
          . Thanks for visiting my site!
        </Text>
        <Text>
          I maintain a few side projects such as{" "}
          <MessageLink message="Tell me about soundoftext.">
            soundoftext.com
          </MessageLink>
          , a free text-to-speech service with 100k visits per months. Recently,
          I built{" "}
          <MessageLink message="Tell me about Hearling.">Hearling</MessageLink>{" "}
          which is a paid text-to-speech service with more voices and features.
          I also have a passion-project called{" "}
          <MessageLink message="Tell me about scape.fashion.">
            scape.fashion
          </MessageLink>{" "}
          which helps people choose character outfits in Runescape.
        </Text>
        <Text>
          In my spare time I like to{" "}
          <MessageLink message="roll a d20">play D&D</MessageLink>,{" "}
          <MessageLink message="What have you read recently?">
            read a book
          </MessageLink>
          , or log into my{" "}
          <MessageLink message="What's your runescape username?">
            runescape
          </MessageLink>{" "}
          account. I have recently gotten into making my own{" "}
          <MessageLink message="Can you make latte art?">lattes</MessageLink> at
          home and learning how to do my makeup.
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
