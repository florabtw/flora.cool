import styled from "styled-components";

import Heading from "components/Heading";
import Link from "components/Link";
import Page from "components/Page";
import Section from "components/Section";
import Text from "components/Text";

const About = () => {
  return (
    <Page>
      <Section>
        <Heading align="center" level={1}>
          ✨ About Me ✨
        </Heading>
        <Text>
          <strong>I am looking for work!</strong> I have six years of experience
          as a software engineer, focused on front-end web development for at
          least two years. I am looking for an inclusive workplace which will
          make my life easier during my first year as a trans woman. I enjoy
          going deep on challenging problems and plenty of autonomy. If that
          sounds like a good fit for you, my contact info is at the bottom of
          the page.
        </Text>
        <Text>
          I am a 27 year old trans woman (she/they) living in San Diego.
          However, I am moving to Los Angeles at the beginning of 2022. Before
          now, I have lived in Austin (TX), San Francisco (CA), and Saint Louis
          (MO).
        </Text>
        <Text>
          In my spare time I like to play D&D, read a book, or log into my
          runescape account. I have recently gotten into making my own lattes at
          home and learning how to do my makeup.
        </Text>
        <Links>
          <LinkItem>
            <Link to="https://resume.flora.cool">resume</Link>
          </LinkItem>
          <LinkItem>
            <Link to="https://github.com/floradotcool">github</Link>
          </LinkItem>
          <LinkItem>
            <Link to="https://twitter.com/floradotcool">twitter</Link>
          </LinkItem>
          <LinkItem>
            <Link to="mailto:hello@flora.cool">email</Link>
          </LinkItem>
        </Links>
      </Section>
    </Page>
  );
};

const Links = styled.ul`
  display: flex;
  gap: 16px;
  justify-content: center;
  font-size: 1.125rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.li``;

export default About;
