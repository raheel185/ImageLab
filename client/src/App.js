import logo from "./logo.svg";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">ImageLab</h1>
      </header>

      <main className="flex flex-1">
        <aside className="w-64 bg-gray-50 p-4 border-r">
          {/* Toolbar / Sidebar tools will go here */}
          <p className="text-gray-700">Tools</p>
        </aside>

        <section className="flex-1 flex items-center justify-center">
          {/* Editor Canvas */}
          <div className="w-[800px] h-[600px] bg-white shadow-md rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Upload an image to start editing</p>
          </div>
        </section>
      </main>
    </div>
  );
}
