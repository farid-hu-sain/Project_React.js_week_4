import React from 'react';

function ButtonClicker() {
  const handleClick = () => {
    alert('Tombol diklik!');
  };

  const handleMouseEnter = () => {
    console.log('Mouse masuk ke area tombol!');
  };

  const handleMouseLeave = () => {
    console.log('Mouse keluar dari area tombol!');
  };

  return (
    <div>
      <h2>Event Handling Sederhana</h2>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}
      >
        Klik atau Arahkan Mouse ke Saya
      </button>
    </div>
  );
}

export default ButtonClicker;