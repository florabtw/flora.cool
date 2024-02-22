import styled from "styled-components";

import Avatar from "components/Avatar";
import Heading from "components/Heading";
import Link from "components/Link";
import MessageLink from "components/MessageLink";
import Page from "components/Page";
import Section from "components/Section";
import Text from "components/Text";
import useChat from "Chat/Context";
import { COLORS } from "constants.js";
import { questions } from "Flora/messages";

const Home = () => {
  const { setOpen: setChatOpen } = useChat();

  return (
    <Page>
      <SectionStyled>
        <Portrait aria-label="Open chat" onClick={() => setChatOpen((o) => !o)}>
          <Avatar size="large" />
        </Portrait>
        <Heading align="center" level={1}>
          Flora Moon
        </Heading>
        <Links>
          <Link to="https://resume.flora.cool">resume</Link>
          <Link to="https://github.com/florabtw">github</Link>
          <Link to="https://www.linkedin.com/in/florabtw/">linkedin</Link>
          <Link to="mailto:hello@flora.cool">email</Link>
          <Link to="https://instagram.com/itsflorabtw">insta</Link>
        </Links>
        <Text>
          Hello! My name is Flora and this is my personal{" "}
          <MessageLink message={questions.website}>website</MessageLink>. You
          can click the links to start a chat with me, but keep in mind that I
          built this site before conversational AI was cool 😛. I am a queer{" "}
          <MessageLink message={questions.transition}>trans woman</MessageLink>{" "}
          and a{" "}
          <MessageLink message={questions.employment}>
            software engineer
          </MessageLink>{" "}
          with about 8 years of experience. I live in{" "}
          <MessageLink message={questions.location}>Portland, OR</MessageLink>.
          Thanks for stopping by!
        </Text>
        <Text>
          I maintain a few side projects such as{" "}
          <MessageLink message={questions.soundoftext}>
            soundoftext.com
          </MessageLink>
          , a free text-to-speech service with 100k visits per months. Recently,
          I built{" "}
          <MessageLink message={questions.hearling}>Hearling</MessageLink> which
          is a paid text-to-speech service with more voices and features. I also
          have a passion-project called{" "}
          <MessageLink message={questions.fashionscape}>
            scape.fashion
          </MessageLink>{" "}
          which helps people choose character outfits in the video game,
          RuneScape.
        </Text>
        <Text>
          In my spare time I like to{" "}
          <MessageLink message="roll a d20">run D&D games</MessageLink>,{" "}
          <MessageLink message={questions.reading}>read a book</MessageLink>, or
          log into my{" "}
          <MessageLink message={questions.runescape}>runescape</MessageLink>{" "}
          account. I have also recently gotten into making my own{" "}
          <MessageLink message={questions.lattes}>lattes</MessageLink> at home!
        </Text>
      </SectionStyled>
    </Page>
  );
};

const Portrait = styled.button`
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: 0;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${COLORS.primaryLight};
  }
`;

const SectionStyled = styled(Section)`
  padding-top: 80px;
`;

const Links = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin: 0;
  list-style: none;
  padding: 0;
`;

export default Home;
