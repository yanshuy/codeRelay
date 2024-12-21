import { useState } from "react";

export default function Expandable() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ml-8 mt-8">
      <button
        className="py-3w rounded-full bg-purple-700 px-4 py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Click me
      </button>

      <div className="mt-4 w-fit rounded-md border-2 border-purple-500 bg-purple-950/35 p-2">
        <div
          className="overflow-clip transition-all duration-200"
          style={{
            height: isOpen ? "auto" : "1lh",
          }}
        >
          <h1>Add weight to your transitions</h1>
          <p>It's easy to animate and transition to height auto now!</p>
          <p>Who would have thought it would be so easy!</p>
        </div>
      </div>
    </div>
  );
}
