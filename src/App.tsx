import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import { lightTheme, ThemeContext } from "./context/theme.context";
import { UserContext } from "./context/user.context";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [theme, setTheme] = useState(lightTheme);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = Number(window.scrollY.toFixed(0));
      setScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <UserContext value={{ user, setUser }}>
        <ThemeContext value={{ theme, setTheme }}>
          <Header scrollY={scrollY} />
          <Main />
          <Footer />
        </ThemeContext>
      </UserContext>
    </>
  );
}

export default App;
