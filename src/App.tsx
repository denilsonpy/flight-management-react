import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Box className="App">
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    </Box>
  );
}

export default App;
