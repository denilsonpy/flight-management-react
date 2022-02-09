import React from 'react';
import { Box } from '@chakra-ui/react';

import themes from '../../constants/themes';

import Navbar from '../Navbar';

export default function Layout() {
  return (
    <Box d="flex" h="100vh" w="100%" bg={themes.colors.primary}>
      <Navbar />
    </Box>
  );
}
