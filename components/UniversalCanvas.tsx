import React from "react";
import { Platform } from "react-native";
import UniversalCanvasView from "./UniversalCanvasView";

export type UniversalCanvasProps = {
  onTouchStart: (evt) => void;
  onTouchMove: (evt) => void;
  onTouchEnd: (evt) => void;
  onMouseDown: (evt) => void;
  onMouseMove: (evt) => void;
  onMouseUp: (evt) => void;
  style;
};

const UniversalCanvas = ({
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  style,
}: UniversalCanvasProps) => {
  let canvas;
  let ctx;

  const onCanvasCreate = (canvasParam) => {
    if (canvas) {
      return;
    }
    canvas = canvasParam;
    if (Platform.OS === "web") {
      // canvas.width might be not equal canvas.clientWidth, so have to assign again
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    ctx = canvas.getContext("2d");
  };

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
};

export default UniversalCanvas;
