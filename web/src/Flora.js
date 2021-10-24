const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

const flora = (() => {
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

  const removeEventListener = (event, cb) => {
    const index = listeners[event].indexOf(cb);
    listeners[event].splice(index, 1);
  };

  const send = async (_message) => {
    await sleep(500);

    event("typing", true);

    await sleep(1000);

    event("typing", false);
    event("message", "Hello!");
  };

  return { addEventListener, removeEventListener, send };
})();

export default flora;
