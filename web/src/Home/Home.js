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
          <Link to="https://twitter.com/itsflorabtw">twitter</Link>
          <Link to="https://github.com/florabtw">github</Link>
          <Link to="https://www.linkedin.com/in/floradotcool/">linkedin</Link>
          <Link to="mailto:hello@flora.cool">email</Link>
        </Links>
        <Text>
          Hello! My name is Flora Moon, but it hasn't always been. I am a newly
          out{" "}
          <MessageLink message={questions.transition}>trans woman</MessageLink>{" "}
          (she/they) and this is my{" "}
          <MessageLink message={questions.website}>website</MessageLink>. I am
          also a{" "}
          <MessageLink message={questions.employment}>
            software engineer
          </MessageLink>{" "}
          working remotely for HubSpot, while my physical body is in{" "}
          <MessageLink message={questions.location}>Los Angeles</MessageLink>.
          Thanks for visiting my site!
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
          which helps people choose character outfits in Runescape.
        </Text>
        <Text>
          In my spare time I like to{" "}
          <MessageLink message="roll a d20">play D&D</MessageLink>,{" "}
          <MessageLink message={questions.reading}>read a book</MessageLink>, or
          log into my{" "}
          <MessageLink message={questions.runescape}>runescape</MessageLink>{" "}
          account. I have recently gotten into making my own{" "}
          <MessageLink message={questions.lattes}>lattes</MessageLink> at home
          and learning how to do my makeup.
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
