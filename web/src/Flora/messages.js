import Link from "components/Link";
import MessageLink from "components/MessageLink";

/* Relies on `this` being bound to caller. */
function exactMatch(message) {
  return message === this.question;
}

const database = {
  transition: {
    match: exactMatch,
    question: "When did you decide to transition?",
    Message: () => (
      <>
        I have been questioning my gender for years, but my journey really
        started in August 2021, when I started hormone therapy and come out to
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
        <Link to="https://github.com/floradotcool/flora.cool">source code</Link>{" "}
        on Github.
      </>
    ),
  },
  employment: {
    match: exactMatch,
    question: "Where have you worked?",
    Message: () => (
      <>
        I have worked at{" "}
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
        <Link to="https://www.linkedin.com/company/asynchrony-solutions/">
          Asynchrony Labs
        </Link>{" "}
        was a consulting firm in Saint Louis. I worked on a huge variety of
        projects while I was there, but mostly in Java or Scala.
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
  hire_me: {
    match: exactMatch,
    question: "Can I hire you?",
    Message: () => (
      <>
        Yes! I am open to front-end roles. I like solving difficult bugs,
        creating design systems, and lots of autonomy. Check out my{" "}
        <Link to="https://resume.flora.cool">resume</Link> and send me an{" "}
        <Link to="mailto:hello@flora.cool">email</Link>.
      </>
    ),
  },
  location: {
    match: exactMatch,
    question: "Where have you lived before?",
    Message: () => (
      <>
        Well, I grew up in the small town of Jefferson City, MO. I have also
        lived in Saint Louis, San Francisco, Austin (TX), San Diego, and I will
        be moving to Los Angeles in early 2022.
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
  dnd: {
    match: exactMatch,
    question: "roll d20",
    Message: () => "",
  },
  reading: {
    match: exactMatch,
    question: "What have you read recently?",
    Message: () => "",
  },
  username: {
    match: exactMatch,
    question: "What is your runescape username?",
    Message: () => "",
  },
  lattes: {
    match: exactMatch,
    question: "Can you make latte art?",
    Message: () => "",
  },
};

/* Looks like: { [id1]: '<question_1>', [id2]: '<question_2>' } */
export const questions = Object.entries(database).reduce((qs, [k, v]) => {
  qs[k] = v.question;
  return qs;
}, {});

export const messages = Object.values(database);
