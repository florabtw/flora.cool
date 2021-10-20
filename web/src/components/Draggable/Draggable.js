import React from "react";

const clampX = (x) => Math.min(Math.max(8, x), document.body.offsetWidth - 8);
const clampY = (y) => Math.min(Math.max(8, y), document.body.offsetHeight - 8);

const Draggable = ({ children, onClick }) => {
  const targetRef = React.useRef();
  const [dragged, setDragged] = React.useState(false);
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    const handleDrag = (event) => {
      if (!dragging) return;
      setDragged(true);

      if (!targetRef?.current)
        throw new Error("Could not find Chat Bubble element!");

      const targetEvent = event.targetTouches?.[0] || event;

      const x = clampX(targetEvent.pageX);
      const y = clampY(targetEvent.pageY);

      targetRef.current.style.left = x + "px";
      targetRef.current.style.top = y + "px";
    };

    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("touchmove", handleDrag);

    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("touchmove", handleDrag);
    };
  }, [dragging]);

  React.useEffect(() => {
    const handleMouseLeave = () => setDragging(false);

    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () =>
      document.body.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleDragStart = () => setDragging(true);

  const handleDragEnd = () => {
    if (!dragged) onClick();

    setDragging(false);
    setDragged(false);
  };

  return React.cloneElement(React.Children.only(children), {
    onMouseDown: handleDragStart,
    onMouseUp: handleDragEnd,
    onTouchStart: handleDragStart,
    onTouchEnd: handleDragEnd,
    ref: targetRef,
  });
};

export default Draggable;
