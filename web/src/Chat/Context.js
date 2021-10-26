import React from "react";

import Chat from "./Chat";
import flora from "Flora";
import sparkleSrc from "./sparkle.wav";

const sparkleAudio = new Audio(sparkleSrc);

const ChatContext = React.createContext();

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const handleNewMessage = React.useCallback(
    (message) => setMessages((ms) => ms.concat([message])),
    []
  );

  const sendMessage = (text) => {
    handleNewMessage({ text, type: "sent" });
    flora.send(text);
  };

  React.useEffect(() => {
    const handleMessage = (text) => {
      const message = { text, type: "received", unread: !open };
      handleNewMessage(message);
      sparkleAudio.play();
    };

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

  const context = {
    messages,
    sendMessage,
    open,
    setOpen,
  };

  return (
    <ChatContext.Provider value={context}>
      {children}
      <Chat />
    </ChatContext.Provider>
  );
};

const useChat = () => React.useContext(ChatContext);

export default useChat;
export { ChatProvider };
