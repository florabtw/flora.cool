import Float from "./Float";
import Stretch from "./Stretch";
import useChat from "Chat/Context";
import useWindowSize from "../hooks";
import { BREAKPOINTS } from "constants.js";

const Frame = (props) => {
  const { open } = useChat();
  const windowSize = useWindowSize();

  const isStretch = windowSize.width < BREAKPOINTS.chat.stretch;

  return isStretch ? (
    <Stretch open={open} {...props} />
  ) : (
    <Float open={open} {...props} />
  );
};

export default Frame;
