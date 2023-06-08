import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Foooter';
import Navigation from './Components/Navigation/Navigation';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { createTheme } from '@mui/material';
import ColorModeContext from './Components/Context/ColorModeContext';
import { routes } from './routes/routes';

function App() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} Component={route.element} />
          ))}
        </Routes>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
