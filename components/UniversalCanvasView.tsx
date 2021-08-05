import React from "react";
import GCanvasView from "./GCanvasComponent";

const UniversalCanvasView = React.memo((props: any) => {
  const {
    onCanvasCreate,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown, // doesn't make sense for mobile
    onMouseMove, // doesn't make sense for mobile
    onMouseUp, // doesn't make sense for mobile
    style,
  } = props;

  return (
    <GCanvasView
      onCanvasCreate={onCanvasCreate}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={style}
    />
  );
});

export default UniversalCanvasView;
