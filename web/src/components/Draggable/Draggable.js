import React from "react";
import styled from "styled-components";

const clampX = (x) => Math.min(Math.max(8, x), document.body.offsetWidth - 8);
const clampY = (y) => Math.min(Math.max(8, y), document.body.offsetHeight - 8);

const Draggable = ({ children }) => {
  const targetRef = React.useRef();
  const [dragging, setDragging] = React.useState(false);

  React.useEffect(() => {
    const handleDrag = (event) => {
      if (!dragging) return;

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

  const handleDragStart = (event) => {
    const handle =
      targetRef?.current?.querySelector("[data-draghandle]") ||
      targetRef.current;

    if (!handle) throw new Error("Could not find a drag handle");
    if (!handle.contains(event.target)) return;

    setDragging(true);
  };

  const handleDragEnd = () => setDragging(false);

  return (
    <DragArea
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      ref={targetRef}
    >
      {children}
    </DragArea>
  );
};

const DragArea = styled.div`
  left: 8px;
  top: 60px;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export default Draggable;
