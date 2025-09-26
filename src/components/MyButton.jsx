import React from 'react';
import { useState } from 'react';

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
      setCount(count + 1);
      alert(`Czuję się kliknięty ${count} razy!`);
    }
  
    return (
      <button onClick={handleClick}>
        Jam jest przycisk. count: {count}
      </button>
    );
}

export default MyButton;