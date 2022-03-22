import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";

import Home from "./Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#FF0000",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background:{
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
        light: darkMode ? '#f4f6f8' : '#181818',
      },
    },
  });  

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </ThemeProvider>
  );
}

export default App;
