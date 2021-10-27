import messages from "./messages";

const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

const flora = (() => {
  const init = () => {
    const handleFirstClick = () => {
      intro();
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick);
  };

  const listeners = {
    message: [],
    navigate: [],
    typing: [],
  };

  const addEventListener = (event, cb) => {
    listeners[event].push(cb);
  };

  const event = (event, payload) =>
    listeners[event].map((listener) => listener(payload));

  const intro = () => {
    messageUser("Welcome to flora.cool!");
  };

  const messageUser = async (message) => {
    event("typing", true);

    await sleep(1000);

    event("typing", false);
    event("message", message);
  };

  const removeEventListener = (event, cb) => {
    const index = listeners[event].indexOf(cb);
    listeners[event].splice(index, 1);
  };

  const send = async (message) => {
    await sleep(500);

    const Found = messages.find(({ match }) => match(message));

    if (Found) messageUser(<Found.Message />);
    else messageUser("Hmm. I'm not sure what to say to that.");
  };

  init();

  return { addEventListener, intro, removeEventListener, send };
})();

export default flora;
