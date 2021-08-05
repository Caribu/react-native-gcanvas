import React from "react";
import { Platform } from "react-native";
import GCanvasView from "./GCanvasComponent";

const UniversalCanvas = (props: any) => {
  let canvas = null;
  let ctx = null;

  const initCanvas = (canvasParam: any) => {
    if (canvas) {
      return;
    }
    canvas = canvasParam;
    if (Platform.OS === "web") {
      // canvas.width not equal canvas.clientWidth, so have to assign again
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    }
    ctx = canvas.getContext("2d");
  };

  if (Platform.OS === "web") {
    return (
      <canvas
        onTouchStart={() => {
          console.log("touch start");
        }}
        onTouchMove={() => {
          console.log("touch move");
        }}
        onTouchEnd={() => {
          console.log("touch end");
        }}
        onMouseDown={() => {
          console.log("mouse start");
        }}
        onMouseMove={() => {
          console.log("mouse move");
        }}
        onMouseUp={() => {
          console.log("mouse up");
        }}
        ref={initCanvas}
        style={{
          backgroundColor: "yellow",
          width: 200,
          height: 300,
        }}
      />
    );
  }

  // Mobile
  return (
    <GCanvasView
      onCanvasCreate={initCanvas}
      onTouchStart={() => {
        console.log("touch start");
      }}
      onTouchMove={() => {
        console.log("touch move");
      }}
      onTouchEnd={() => {
        console.log("touch end");
      }}
      style={{
        backgroundColor: "#000",
        width: 200,
        height: 300,
      }}
    />
  );
};

export default UniversalCanvas;
