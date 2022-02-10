import React from 'react';
import { GridItem, Grid } from '@chakra-ui/react';

import themes from '../../constants/themes';

import Navbar from '../Navbar';
import AsideBar from '../AsideBar';

export default function Layout() {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(9, 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={10}
      bg={themes.colors.primary}
    >
      <GridItem rowSpan={1} colSpan={7}>
        <Navbar />
      </GridItem>
      <GridItem rowSpan={8}>
        <AsideBar />
      </GridItem>
    </Grid>
  );
}
