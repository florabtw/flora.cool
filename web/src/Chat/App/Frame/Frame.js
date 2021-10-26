import Float from "./Float";
import Stretch from "./Stretch";
import useWindowSize from "../../hooks";
import { BREAKPOINTS } from "constants.js";

const Frame = (props) => {
  const windowSize = useWindowSize();

  const isStretch = windowSize.width < BREAKPOINTS.chat.stretch;

  return isStretch ? <Stretch {...props} /> : <Float {...props} />;
};

export default Frame;
