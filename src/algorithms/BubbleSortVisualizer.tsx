import { useState } from "react";
import { BarArray } from "../components/BarArray";

export function BubbleSortVisualizer() {
  const [array, setArray] = useState([5, 8, 4, 3, 2]);
  const [step, setStep] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [history, setHistory] = useState<number[][]>([array]);

  function nextStep() {
    if (sorted) return;
    let arr = [...history[history.length - 1]];
    let swapped = false;
    for (let i = 0; i < arr.length - 1 - step; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    setHistory([...history, arr]);
    if (!swapped || step >= arr.length - 2) setSorted(true);
    setStep(step + 1);
  }

  function reset() {
    setArray([5, 8, 4, 3, 2]);
    setHistory([[5, 8, 4, 3, 2]]);
    setStep(0);
    setSorted(false);
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-xl mx-auto flex flex-col items-center">
      <BarArray array={history[history.length - 1]} sorted={sorted} />
      <div className="flex space-x-2 mt-2">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 disabled:opacity-50"
          onClick={nextStep}
          disabled={sorted}
        >
          ▶ Next
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded shadow hover:bg-gray-600"
          onClick={reset}
        >
          ⟲ Reset
        </button>
      </div>
      {sorted && <div className="mt-4 text-green-400 font-semibold">Sorted!</div>}
    </div>
  );
}
