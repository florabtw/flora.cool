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

  const send = async (_message) => {
    await sleep(500);
    await messageUser("Hello!");
  };

  init();

  return { addEventListener, intro, removeEventListener, send };
})();

export default flora;
