import React, { useState } from 'react';
import NewsList from './components/newslist/NewsList';
import Header from './components/Header/header';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [catergory, setCategory] = useState('all');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header setCategory={setCategory}/>
      <NewsList cat={catergory}/>
    </ThemeProvider>
  );
}

export default App;