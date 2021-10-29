import MessageLink from "components/MessageLink";

import { messages } from "./messages";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

const Intro = () => (
  <>
    Welcome to flora.cool! You can send me a message, but I only have a few
    prepared responses. Try clicking on one of the provided prompts! They look
    like this: <MessageLink message="Hello!">Hello!</MessageLink>
  </>
);

const Shrug = () => <>&#x1f937;&zwj;&#x2640;&#xFE0F;</>;

const genericMessages = [
  <>
    Hmm. Not sure what to say to that <Shrug />
  </>,
  <>
    Sorry, I can't answer that <Shrug />
  </>,
  <>
    Uhh, I don't know that one <Shrug />
  </>,
];

const random = (max) => Math.floor(Math.random() * max);
const Unsure = () => genericMessages[random(genericMessages.length)];

const flora = (() => {
  const listeners = {
    message: [],
    status: [],
  };

  const addEventListener = (event, cb) => {
    listeners[event].push(cb);
  };

  const event = (event, payload) =>
    listeners[event].map((listener) => listener(payload));

  const messageUser = async ({ message, status = "typing" }) => {
    event("status", status);

    await sleep(1000);

    event("status", "none");
    event("message", message);
  };

  const removeEventListener = (event, cb) => {
    const index = listeners[event].indexOf(cb);
    listeners[event].splice(index, 1);
  };

  const send = async (text) => {
    await sleep(500);

    const { Message, status } = messages.find((msg) => msg.match(text)) || {};

    if (Message) messageUser({ message: <Message text={text} />, status });
    else messageUser({ message: <Unsure /> });
  };

  messageUser({ message: <Intro /> });

  return { addEventListener, removeEventListener, send };
})();

export default flora;
