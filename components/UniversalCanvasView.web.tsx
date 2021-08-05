import React from "react";

const UniversalCanvasView = ({
  onCanvasCreate,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  style,
}) => {
  return (
    <canvas
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      ref={onCanvasCreate}
      style={style}
    />
  );
};
export default UniversalCanvasView;
