import React, { useEffect, useState } from 'react';
import './Theme.css';
const themes = [
  {
    background: '#fef6e4',
    buttoncolor: '#f582ae',
    buttontext: '#001858',
    textcolor: '#001858',
  },
  {
    background: '#0f0e17',
    buttoncolor: '#ff8906',
    buttontext: '#fffffe',
    textcolor: '#fffffe',
  },
];
function Theme() {
  const [index, setIndex] = useState(0);
  const changeTheme = (index) => {
    const { background, textcolor, buttoncolor, buttontext } = themes[index];

    const body = document.querySelector('body');
    const style = body.style;

    style.setProperty('--background-color', background);
    style.setProperty('--button-text', buttontext);
    style.setProperty('--text-color', textcolor);
    style.setProperty('--button-color', buttoncolor);
  };

  useEffect(() => {
    const changeTheme = (index) => {
      const { background, textcolor, buttoncolor, buttontext } = themes[index];

      const body = document.querySelector('body');
      const style = body.style;

      style.setProperty('--background-color', background);
      style.setProperty('--button-text', buttontext);
      style.setProperty('--text-color', textcolor);
      style.setProperty('--button-color', buttoncolor);
    };

    changeTheme(index);
  }, [themes, index, changeTheme]);

  return (
    <div className="themes">
      <label for="toggle">
        <input
          class="input"
          type="checkbox"
          id="toggle"
          onClick={() => setIndex((index + 1) % 2)}
        />
        <div class="toggle-wrapper">
          <span class="selector"></span>
        </div>
      </label>
    </div>
  );
}

export default Theme;
