import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import { ThemeContextProvider } from "./context/theme.context";
import { UserContextProvider } from "./context/user.context";

function App() {
  const [scrollY, setScrollY] = useState(0);

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
      <UserContextProvider>
        <ThemeContextProvider>
          <Header scrollY={scrollY} />
          <Main />
          <Footer />
        </ThemeContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
