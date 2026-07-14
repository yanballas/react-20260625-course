import { useContext } from "react";
import {
  lightTheme,
  darkTheme,
  ThemeContext,
} from "../../context/theme.context";

export default function ThemeSwitcher() {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext;

  return (
    <button
      onClick={() => setTheme(theme === lightTheme ? darkTheme : lightTheme)}
    >
      Switch Theme
    </button>
  );
}
