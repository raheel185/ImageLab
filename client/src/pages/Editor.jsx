import EditorCanvas from "../components/EditorCanvas";
import Toolbar from "../components/Toolbar";

export default function Editor() {
  return (
    <div className="flex flex-col h-screen">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">ImageLab</h1>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r bg-gray-50">
          <Toolbar />
        </aside>

        <main className="flex-1 flex items-center justify-center bg-gray-100">
          <EditorCanvas />
        </main>
      </div>
    </div>
  );
}
