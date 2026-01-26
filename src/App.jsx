import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Toolbar from './components/Toolbar';
import ParticlesContainer from './components/ParticlesContainer';
import MainContent from './components/MainContent';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4286f4',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Toolbar />
        <Box component="main" sx={{ flexGrow: 1, position: 'relative' }}>
          <ParticlesContainer>
            <MainContent />
          </ParticlesContainer>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
