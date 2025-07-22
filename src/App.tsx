// ...existing code...
import { useState } from "react";
import { BubbleSortVisualizer } from "./algorithms/BubbleSortVisualizer";
import { MergeSortVisulaizer } from "./algorithms/MergeSortVisualizer";

const algorithms = [
  "Bubble Sort",
  "Selection Sort",
  "Insertion Sort",
  "Merge Sort",
  "Quick Sort",
];

function App() {
  const [selected, setSelected] = useState(algorithms[0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#181c23] text-white">
      {/* Header */}
      <header className="bg-[#232837] text-white px-6 py-4 shadow flex items-center">
        <h1 className="text-2xl font-bold tracking-tight">AlgoViz</h1>
        <span className="ml-4 text-sm opacity-80">Interactive Algorithm Visualizer</span>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-[#232837] border-r border-[#232837] p-4">
          <h2 className="font-semibold mb-2 text-lg">Algorithms</h2>
          <ul>
            {algorithms.map((algo) => (
              <li key={algo}>
                <button
                  className={`w-full text-left px-2 py-1 rounded transition-colors duration-150 ${
                    selected === algo
                      ? "bg-blue-700 text-white font-bold"
                      : "hover:bg-[#232837] hover:text-blue-400 text-gray-300"
                  }`}
                  onClick={() => setSelected(algo)}
                >
                  {algo}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Visualization Area */}
        <main className="flex-1 p-8">
          <h2 className="text-xl font-semibold mb-4 text-white">{selected}</h2>
          <div className="bg-[#232837] rounded-xl shadow p-6 min-h-[300px] flex items-center justify-center">
            {selected === "Bubble Sort" && <BubbleSortVisualizer />}
            {selected === "Merge Sort" && <MergeSortVisulaizer />}
            {selected !== "Bubble Sort" && selected !== "Merge Sort" && (
              <span className="text-gray-400">[Visualization Placeholder]</span>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;