import React from "react";
import UniversalCanvasView from "./UniversalCanvasView";

export type UniversalCanvasProps = {
  onCanvasCreate: (canvas) => void;
  onTouchStart: (evt) => void;
  onTouchMove: (evt) => void;
  onTouchEnd: (evt) => void;
  onMouseDown: (evt) => void;
  onMouseMove: (evt) => void;
  onMouseUp: (evt) => void;
  style;
};

const UniversalCanvas = React.memo((props: UniversalCanvasProps) => {
  const {
    onCanvasCreate,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    style,
  } = props;

  return (
    <UniversalCanvasView
      onCanvasCreate={onCanvasCreate}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={style}
    />
  );
});

export default UniversalCanvas;
