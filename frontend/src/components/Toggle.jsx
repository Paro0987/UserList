import React from 'react';

function Toggle({ theme, toggleTheme }) {
  return (
    <div className='toggle'>
    <button  onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
    </div>
  );
}

export default Toggle;
