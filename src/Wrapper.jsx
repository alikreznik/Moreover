import React from 'react';
import { useSettings } from './useSettings';
import App from './App';

function Wrapper() {
  const { style } = useSettings();

  const wrapperStyle = {
    backgroundColor: style.background,
    fontFamily: style.text.font,
    minHeight: '100vh',
    margin: 0,
  };

  return (
    <div className={`transition-colors duration-500 ease-in-out`} style={wrapperStyle}>
      <App />
    </div>
  );
}

export default Wrapper;
