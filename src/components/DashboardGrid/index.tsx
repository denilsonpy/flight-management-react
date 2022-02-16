import React, { useEffect, useState } from 'react';
import {
  Grid, GridItem, Box, Text, LinkBox, LinkOverlay,
} from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';
import { GiWindsock } from 'react-icons/gi';

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
  const [weather, setWeather] = useState<any>({} as any);

  async function getWeather(city: string) {
    const response = await fetch(`https://denilsonpy-projects-api.herokuapp.com/weather/${city}`)
      .then(
        (data) => data.json(),
      );

    setWeather(response);
  }

  useEffect(() => {
    getWeather('Rio Claro');
    const timer = setInterval(() => {
      getWeather('Rio Claro');
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Grid
      h="100%"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(9, 1fr)"
      gap={4}
    >
      <GridItem
        colSpan={3}
        rowSpan={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={4}
      >
        <LinkBox width={250} height={150} padding={3} boxShadow="xl" bg={themes.colors.light} borderRadius={15}>
          <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">
            <Text
              as="h1"
              fontWeight="bold"
              color={themes.colors.secondary}
              fontSize={20}
            >
              Weather
            </Text>
            <IoIosArrowForward color={themes.colors.grayDark} />
          </Box>
          <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">
            <Box flexDirection="column" display="flex" justifyContent="space-between" alignItems="start">
              <Text
                as="p"
                color={themes.colors.grayDark}
                fontSize={18}
              >
                {!!weather.main && weather.weather[0]?.description}
              </Text>
              <Text
                as="p"
                color={themes.colors.secondary}
                fontWeight="bold"
                fontSize={24}
              >
                {weather.main?.temp}
                ° C
              </Text>
              <Box flexDirection="row" display="flex" gap={3} color={themes.colors.grayLight}>
                <Text
                  as="p"
                  color="blue.300"
                  fontWeight="bold"
                  fontSize={15}
                >
                  {weather.main?.temp_min}
                  ° C
                </Text>
                /
                <Text
                  as="p"
                  color="orange"
                  fontWeight="bold"
                  fontSize={15}
                >
                  {weather.main?.temp_max}
                  ° C
                </Text>
              </Box>

            </Box>
            <LinkOverlay href="https://www.redemet.aer.mil.br/" target="_blank" title="metar" flexDirection="column" display="flex" justifyContent="space-between" alignItems="start">
              <WiDaySunny fontSize={80} color="orange" />
            </LinkOverlay>
          </Box>
        </LinkBox>
      </GridItem>
      <GridItem
        colSpan={3}
        rowSpan={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop={4}
      >
        <LinkBox
          width={250}
          height={150}
          padding={3}
          boxShadow="xl"
          bg={themes.colors.light}
          borderRadius={15}
        >
          <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">
            <Text
              as="h1"
              fontWeight="bold"
              color={themes.colors.secondary}
              fontSize={20}
            >
              Wind
            </Text>
            <IoIosArrowForward color={themes.colors.grayDark} />
          </Box>
          <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">

            <Box flexDirection="column" display="flex" justifyContent="space-between" alignItems="start">
              <Text
                as="p"
                color={themes.colors.grayDark}
                fontSize={18}
              >
                Speed
              </Text>
              <Text
                as="p"
                color={themes.colors.secondary}
                fontWeight="bold"
                fontSize={24}
              >
                {weather.wind?.speed}
                {' '}
                kt
              </Text>
              <Box flexDirection="row" display="flex" gap={3} color={themes.colors.grayLight}>
                <Text
                  as="p"
                  color="blue.300"
                  fontWeight="bold"
                  fontSize={18}
                >
                  {weather.wind?.deg}
                  {' '}
                  deg
                </Text>
              </Box>

            </Box>
            <LinkOverlay href="https://www.windy.com/SDRK" target="_blank" title="windy" flexDirection="column" display="flex" justifyContent="space-between" alignItems="start">
              <GiWindsock fontSize={80} color={themes.colors.secondary} />
            </LinkOverlay>
          </Box>
        </LinkBox>
      </GridItem>
      <GridItem colSpan={3} rowSpan={3} display="flex" alignItems="flex-start" justifyContent="center">
        <Box width={250} height="90%" boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem
        colSpan={6}
        rowSpan={9}
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        gap={8}
      >
        <Box width="85%" height={75} boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={75} boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={75} boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
        <Box width="85%" height={75} boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
      <GridItem colSpan={3} rowSpan={5} display="flex" alignItems="flex-start" justifyContent="center">
        <Box width={250} height="90%" boxShadow="xl" bg={themes.colors.light} borderRadius={15} />
      </GridItem>
    </Grid>
  );
}
