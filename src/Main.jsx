import React, {useContext} from 'react';
import AppTheme from './Colors';
import ThemeContext from './ThemeContext';

const Main = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <main style={{
      textAlign: "center",
      padding: "1rem",
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`,
    }}>
      <h1>Heading 1</h1>
      <p>Some Text</p>
        <button>Button</button>
      </main>
  )
}
export default Main;