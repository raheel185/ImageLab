import { Upload, Download, Undo, Redo } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import useEditorStore from "../context/useEditorStore";
import { saveAs } from "file-saver";
import { Image } from "fabric";

export default function Toolbar() {
  const { canvas, undo, redo } = useEditorStore();

  // Upload handler
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        Image.fromURL(e.target.result, (img) => {
          img.scaleToWidth(600);
          canvas.add(img);
          canvas.centerObject(img);
          canvas.setActiveObject(img);
          canvas.renderAll();
        });
      };
      reader.readAsDataURL(file);
    },
    [canvas]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Export handler
  const handleExport = () => {
    if (!canvas) return;
    const dataUrl = canvas.toDataURL({
      format: "png",
      quality: 1,
    });
    saveAs(dataUrl, "imagelab.png");
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Upload */}
      <button
        {...getRootProps()}
        className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        <Upload size={18} />
        <span>Upload</span>
        <input {...getInputProps()} />
      </button>

      {/* Export */}
      <button
        onClick={handleExport}
        className="flex items-center gap-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        <Download size={18} />
        <span>Export</span>
      </button>

      {/* Undo/Redo */}
      <div className="flex gap-2">
        <button
          onClick={undo}
          className="flex items-center gap-1 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <Undo size={18} />
        </button>
        <button
          onClick={redo}
          className="flex items-center gap-1 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          <Redo size={18} />
        </button>
      </div>
    </div>
  );
}
