import React from 'react';

function MyButton() {
    function handleClick() {
      alert('Czuję się kliknięty!');
    }
  
    return (
      <button onClick={handleClick}>
        Jam jest przycisk
      </button>
    );
}

export default MyButton;