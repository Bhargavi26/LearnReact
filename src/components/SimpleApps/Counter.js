import { useState } from 'react';

// This is a warm up question to help you
// get familiar with the editor.
// Most of the code has been filled in for you.
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <h1> {count} </h1>
      <button
        onClick={() => {
          // Fix the bug in the next line
          // to complete the question.
          setCount(count + 1);
        }}>
        Clicks
      </button>
    </div>
  );
}
