import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import themes from '../../constants/themes';

// import themes from '../../constants/themes';

// type Props = {
//   children: ReactNode
// }

// { /* <Box
// w={300}
// h={150}
// borderRadius={15}
// backgroundColor={themes.colors.light}
// boxShadow="xl"
// >
// {children}
// </Box> */ }

export default function DashboardGrid() {
  return (
    <Grid
      h="100%"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(9, 1fr)"
      gap={4}
    >
      <GridItem colSpan={3} rowSpan={2} display="flex" alignItems="center" justifyContent="center">
        <Box width={350} height={200} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem colSpan={3} rowSpan={2} display="flex" alignItems="center" justifyContent="center">
        <Box width={350} height={200} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem colSpan={3} rowSpan={3} display="flex" alignItems="flex-start" justifyContent="center">
        <Box width={250} height="90%" boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem
        colSpan={6}
        rowSpan={9}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        gap={8}
        marginTop={30}
      >
        <Box width="85%" height={100} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={100} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={100} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={100} boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem colSpan={3} rowSpan={5} display="flex" alignItems="flex-start" justifyContent="center">
        <Box width={250} height="90%" boxShadow="2xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
    </Grid>
  );
}
