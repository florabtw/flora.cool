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
    else messageUser({ message: "Hmm. I'm not sure what to say to that." });
  };

  messageUser({ message: <Intro /> });

  return { addEventListener, removeEventListener, send };
})();

export default flora;
