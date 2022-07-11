import { FunctionComponent } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

interface ThemeProps {
  children: React.ReactNode;
}

const theme = createTheme({
  typography: {
    fontFamily: '"Quicksand", "Roboto", sans-serif',
  },
  palette: {
    primary: {
      main: '#23864e',
      contrastText: '#fff',
    },
  },
});

const Theme: FunctionComponent<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
