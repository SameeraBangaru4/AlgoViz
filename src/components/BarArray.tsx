import { motion } from "framer-motion";

export function BarArray({ array, sorted }: { array: number[]; sorted: boolean }) {
  return (
    <div className="flex space-x-2 mb-4 h-40 items-end w-full justify-center">
      {array.map((num, idx) => {
        const barHeight = num * 20;
        const showAbove = barHeight < 32;
        return (
          <div key={idx} className="flex flex-col items-center">
            {showAbove && (
              <span className="text-xs font-bold mb-1 text-white">{num}</span>
            )}
            <motion.div
              layout
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`w-8 bg-blue-500 rounded-t shadow-lg flex items-end justify-center border-2 border-blue-700 ${sorted ? "bg-green-500 border-green-700" : ""}`}
              style={{ height: `${barHeight}px` }}
            >
              {!showAbove && (
                <span className="text-xs font-bold mb-2 text-white">{num}</span>
              )}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
