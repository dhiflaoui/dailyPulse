import React, { useState } from "react";

interface AdhkarCounterProps {
  name: string;
  targetCount?: number;
}

const AdhkarCounter: React.FC<AdhkarCounterProps> = ({
  name,
  targetCount = 33,
}) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < targetCount) {
      setCount(count + 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">{name}</h2>

      <div className="text-4xl font-bold mb-4">
        {count} / {targetCount}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleIncrement}
          className="px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
          disabled={count >= targetCount}
        >
          Count
        </button>

        <button
          onClick={handleReset}
          className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default AdhkarCounter;
