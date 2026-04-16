import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const ThemeContext = createContext(null);
// get and setup cookie
const cookie = Cookies.get("defaultTheme");
const defaultTheme = cookie
  ? JSON.parse(cookie)
  : {
      isDarkmode: false,
      accentColor: "#63537d",
      fontPercentage: 100,
    };
export const ThemeProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultTheme.isDarkMode);
  const [accentColor, setAccentColor] = useState(defaultTheme.accentColor);
  const [fontPercentage, setFontPercentage] = useState(
    defaultTheme.fontPercentage,
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    document.body.style.fontSize = `${fontPercentage}%`;
    // setup cookie
    const theme = {
      isDarkMode,
      accentColor,
      fontPercentage,
    };
    Cookies.set("defaultTheme", JSON.stringify(theme));
  }, [isDarkMode, fontPercentage, accentColor]);

  const toggleDarkMode = () => {
    setIsDarkMode((currentMode) => !currentMode);
  };

  return (
    <ThemeContext.Provider
      value={{
        accentColor,
        isDarkMode,
        fontPercentage,
        actions: {
          toggleDarkMode,
          updateAccentColor: setAccentColor,
          updateFontPercentage: setFontPercentage,
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
