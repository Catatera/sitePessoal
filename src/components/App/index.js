import React, { useMemo, useState } from "react";
import GlobalStyle from "../../styles/global";
import themes from "../../styles/themes";
import { ThemeProvider } from "styled-components";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

export default function App() {
  const [theme, settheme] = useState("dark");

  const currentTheme  = useMemo(() => {
    return themes[theme];
  }, [theme]);

  function handleToggleTheme() {
    settheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <>
      <ThemeProvider theme={ currentTheme }>
        <GlobalStyle />
        <Header onToggleTheme={handleToggleTheme} />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}
