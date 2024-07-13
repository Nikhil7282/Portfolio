import React, { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";

const CodeBlock = () => {
  const [isCopied, setIsCopied] = useState(false);
  const codeToCopy = "npx nikhildev";
  const handleCopyClick = () => {
    try {
      navigator.clipboard.writeText(codeToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
    }
  };

  return (
    <div>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-auto relative w-48">
        <div>{codeToCopy}</div>
        <button
          className="absolute top-2 right-2 text-sm bg-gray-600 text-white px-2 py-1 rounded"
          onClick={handleCopyClick}
        >
          {isCopied ? <LuCopyCheck /> : <LuCopy />}
        </button>
      </pre>
    </div>
  );
};

export default CodeBlock;
