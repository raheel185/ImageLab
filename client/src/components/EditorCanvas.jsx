import { useEffect, useRef } from "react";
import { Canvas } from "fabric";
import useEditorStore from "../context/useEditorStore";

export default function EditorCanvas() {
  const canvasRef = useRef(null);
  const { setCanvas } = useEditorStore();

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#fff",
    });

    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [setCanvas]);

  return (
    <canvas
      ref={canvasRef}
      id="editor-canvas"
      className="border shadow-md rounded"
    />
  );
}
