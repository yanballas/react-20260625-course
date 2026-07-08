import { useCallback, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScroll = Number(window.scrollY.toFixed(0));
    setScrollY(currentScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Header scrollY={scrollY} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
