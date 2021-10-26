import React from "react";

import Bubble from "./Bubble";
import Frame from "./Frame";
import Window from "./Window";
import flora from "Flora";

/* Cache <App /> in memo to prevent re-renders during mouse drag */
const App = React.memo(({ dragged, open, setOpen }) => {
  const [messages, setMessages] = React.useState([]);

  const handleBubbleClick = () => setOpen((o) => !o);

  const handleNewMessage = React.useCallback(
    (message) => setMessages((ms) => ms.concat([message])),
    []
  );

  const handleSend = (text) => {
    handleNewMessage({ text, type: "sent" });
    flora.send(text);
  };

  React.useEffect(() => {
    const handleMessage = (text) =>
      handleNewMessage({ text, type: "received", unread: !open });

    flora.addEventListener("message", handleMessage);
    return () => flora.removeEventListener("message", handleMessage);
  }, [handleNewMessage, open]);

  React.useEffect(() => {
    if (!open) return;

    setMessages((ms) =>
      ms.map((m) => {
        delete m.unread;
        return m;
      })
    );
  }, [open]);

  const unreadCount = messages.reduce((c, m) => (m.unread ? c + 1 : c), 0);

  return (
    <>
      <Bubble
        dragged={dragged}
        onClick={handleBubbleClick}
        unread={unreadCount}
      />
      <Frame open={open}>
        <Window messages={messages} onSend={handleSend} />
      </Frame>
    </>
  );
});

export default App;
