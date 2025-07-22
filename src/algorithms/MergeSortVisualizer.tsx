import React, { useState } from "react";
import { BarArray } from "../components/BarArray";

function getMergeSortSteps(arr: number[]): number[][] {
  const steps: number[][] = [];
  function mergeSort(array: number[], left: number, right: number) {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
    steps.push([...array]);
  }
  function merge(array: number[], left: number, mid: number, right: number) {
    const result = [];
    let i = left, j = mid + 1;
    while (i <= mid && j <= right) {
      if (array[i] < array[j]) result.push(array[i++]);
      else result.push(array[j++]);
    }
    while (i <= mid) result.push(array[i++]);
    while (j <= right) result.push(array[j++]);
    for (let k = left; k <= right; k++) array[k] = result[k - left];
  }
  const copy = [...arr];
  steps.push([...copy]);
  mergeSort(copy, 0, copy.length - 1);
  return steps;
}

export function MergeSortVisulaizer() {
  const initialArray = [5, 3, 8, 4, 2];
  const [history, setHistory] = useState<number[][]>(getMergeSortSteps(initialArray));
  const [step, setStep] = useState(0);
  const [sorted, setSorted] = useState(false);

  function nextStep() {
    if (step < history.length - 1) {
      setStep(step + 1);
      if (step + 1 === history.length - 1) {
        setSorted(true);
      }
    }
  }

  function reset() {
    setHistory(getMergeSortSteps(initialArray));
    setStep(0);
    setSorted(false);
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-xl mx-auto flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Merge Sort Visualizer</h2>
      <BarArray array={history[step]} sorted={sorted} />
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