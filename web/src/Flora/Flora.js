import { messages } from "./messages";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

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

  return { addEventListener, removeEventListener, send };
})();

export default flora;
