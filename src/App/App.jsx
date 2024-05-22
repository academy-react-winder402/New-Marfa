import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Router from "../routes/Router";
import { MantineProvider } from "@mantine/core";
import handleTheme from "../core/services/handleTheme";

import '@mantine/core/styles.css';
function App() {

  useEffect(() => {
    handleTheme();
  }, []);
  return (
    <>
      <MantineProvider>
        <Router />

      </MantineProvider>
    </>
  );
}

export default App;
