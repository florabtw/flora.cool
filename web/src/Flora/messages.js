import Attachment from "components/Attachment";
import Link from "components/Link";
import MessageLink from "components/MessageLink";

import latteArtSrc from "./latte-heart.jpg";

/* Relies on `this` being bound to caller. */
function exactMatch(message) {
  return message === this.question;
}

const database = {
  hello: {
    match: (text) => /^(?:hey|hi|hello|hola)(?:\.|!|\?)?$/i.test(text),
    Message: () => "Hi!",
  },
  bye: {
    match: (text) => /(?:bye|goodbye|adios)(?:\.|!|\?)?/i.test(text),
    Message: () => "Bye!",
  },
  help: {
    match: (text) => text.toLowerCase() === "help",
    Message: () =>
      "Sorry, I don't have any secret commands. Well, except this one...",
  },
  transition: {
    match: exactMatch,
    question: "When did you decide to transition?",
    Message: () => (
      <>
        I have been questioning my gender for years, but my journey really
        started in August 2021, when I started hormone therapy and came out to
        friends and family.
      </>
    ),
  },
  website: {
    match: exactMatch,
    question: "How did you build this site?",
    Message: () => (
      <>
        With React! You can find the{" "}
        <Link to="https://github.com/florabtw/flora.cool">source code</Link> on
        Github.
      </>
    ),
  },
  employment: {
    match: exactMatch,
    question: "Where have you worked?",
    Message: () => (
      <>
        Most recently, I worked at HubSpot. Before that, I worked at{" "}
        <MessageLink message={questions.asynchrony}>Asynchrony</MessageLink>,{" "}
        <MessageLink message={questions.leapfin}>Leapfin</MessageLink>,
        Redbubble, and Evernote. I have also spent time freelancing and working
        on my own side business!
      </>
    ),
  },
  asynchrony: {
    match: exactMatch,
    question: "Who is Asynchrony?",
    Message: () => (
      <>
        Asynchrony Labs was a consulting firm in Saint Louis. I worked on a huge
        variety of projects while I was there, but mostly in Java or Scala.
        Asynchrony was{" "}
        <Link to="https://www.wwt.com/press-release/wwt-acquires-agile-software-development-consulting-firm-asynchrony">
          acquired
        </Link>{" "}
        by WWT and no longer exists.
      </>
    ),
  },
  leapfin: {
    match: exactMatch,
    question: "Who is Leapfin?",
    Message: () => (
      <>
        <Link to="https://leapfin.com/">Leapfin</Link> is a financial tech
        startup where I briefly worked after moving to San Francisco.
      </>
    ),
  },
  location: {
    match: exactMatch,
    question: "Where have you lived before?",
    Message: () => (
      <>
        Well, I grew up in the small town of Jefferson City, MO. I have also
        lived in Saint Louis, San Francisco, Austin (TX), San Diego, and Los
        Angeles.
      </>
    ),
  },
  soundoftext: {
    match: exactMatch,
    question: "Tell me about Sound of Text.",
    Message: () => (
      <>
        <Link to="https://soundoftext.com">soundoftext.com</Link> was the first
        website I ever launched, and it just happened to gain a ton of traction
        over the years. I have been maintaining it since 2014, which is a long
        time for me!
      </>
    ),
  },
  hearling: {
    match: exactMatch,
    question: "Tell me about Hearling.",
    Message: () => (
      <>
        I launched <Link to="https://hearling.com">Hearling</Link> in early 2020
        after a short break from full-time employment. It was my first real shot
        at starting a business and it took me about three months of work before
        the first release.
      </>
    ),
  },
  fashionscape: {
    match: exactMatch,
    question: "Tell me about scape.fashion",
    Message: () => (
      <>
        <Link to="https://scape.fashion">scape.fashion</Link> holds a special
        place in my heart. I ended up building a parser for the official{" "}
        <MessageLink message={questions.runescape}>runescape</MessageLink> wiki
        and maintaining my own database of all equipment in the game.
      </>
    ),
  },
  runescape: {
    match: exactMatch,
    question: "What is runescape?",
    Message: () => (
      <>
        Runescape is an MMORPG (like World of Warcraft) from the early 2000's
        which still has a pretty large playerbase. It's my nostalgia game.
      </>
    ),
  },
  dice: {
    match: (text) => /^roll a d(?:4|6|8|10|12|20)$/i.test(text),
    status: "dice",
    Message: ({ text }) => {
      let [, sides] = text.match(/d(\d{1,2})$/i);
      sides = Number(sides);
      return Math.floor(Math.random() * sides) + 1;
    },
  },
  reading: {
    match: exactMatch,
    question: "What is your favorite book?",
    Message: () => (
      <>
        I was a huge fan of the Eragon series when I was a kid. Still waiting
        for a better movie remake... but honestly I mostly read nonfiction these
        days. Add me on{" "}
        <Link to="https://app.thestorygraph.com/profile/floramoon">
          StoryGraph
        </Link>
        !
      </>
    ),
  },
  lattes: {
    match: exactMatch,
    question: "Can you make latte art?",
    Message: () => (
      <>
        Yes, but I only know how to make a heart!
        <Attachment src={latteArtSrc} />
      </>
    ),
  },
};

/* Looks like: { [id1]: '<question_1>', [id2]: '<question_2>' } */
export const questions = Object.entries(database).reduce((qs, [k, v]) => {
  qs[k] = v.question;
  return qs;
}, {});

export const messages = Object.values(database);
