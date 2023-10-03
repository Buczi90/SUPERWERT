import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import router from '../../config/router';
import { AppProvider } from '../../provider/AppProvider';
import { LoaderProvider } from '../../provider/LoaderProvider';
import Loader from './Loader';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#262a41',
        paper: '#3c3f54',
      },
      primary: {
        main: '#fcc93d',
      },
    },
  });

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoaderProvider>
          <Loader />
          <SnackbarProvider>
            <RouterProvider router={router}></RouterProvider>
          </SnackbarProvider>
        </LoaderProvider>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
