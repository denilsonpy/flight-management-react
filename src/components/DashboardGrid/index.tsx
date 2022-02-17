import React, { useEffect, useState } from 'react';
import {
  Grid, GridItem, Box, Text, LinkBox, LinkOverlay, Skeleton, Stack, SkeletonCircle, Button,
} from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';
import { GiWindsock } from 'react-icons/gi';

import themes from '../../constants/themes';

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
                {weather.main ? weather.weather[0]?.description : <Skeleton height="25px" width="120px" />}
              </Text>
              <Text
                as="p"
                color={themes.colors.secondary}
                fontWeight="bold"
                fontSize={24}
                display="flex"
              >
                {weather.main?.temp ? weather.main?.temp : <Skeleton marginY={2} marginRight={1} height="20px" width="60px" />}
                ° C
              </Text>
              <Box flexDirection="row" display="flex" gap={3} color={themes.colors.grayLight}>
                <Text
                  as="p"
                  color="blue.300"
                  fontWeight="bold"
                  fontSize={15}
                  display="flex"
                  alignItems="center"
                >
                  {weather.main?.temp_min ? weather.main?.temp_min : <Skeleton marginY={2} marginRight={1} height="20px" width="5" />}
                  ° C
                </Text>
                /
                <Text
                  as="p"
                  color="orange"
                  fontWeight="bold"
                  fontSize={15}
                  display="flex"
                  alignItems="center"
                >
                  {weather.main?.temp_max ? weather.main?.temp_min : <Skeleton marginY={2} marginRight={1} height="20px" width="5" />}
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
                display="flex"
                alignItems="center"
              >
                {weather.wind?.speed ? weather.wind?.speed : <Skeleton marginY={2} marginRight={1} height="20px" width="60px" />}
                {' '}
                kt
              </Text>
              <Box flexDirection="row" display="flex" gap={3} color={themes.colors.grayLight}>
                <Text
                  as="p"
                  color="blue.300"
                  fontWeight="bold"
                  fontSize={18}
                  display="flex"
                  alignItems="center"
                >
                  {weather.wind?.deg ? weather.wind?.deg : <Skeleton marginY={2} marginRight={1} height="20px" width="10" />}
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
        <Box width={250} height="90%" boxShadow="xl" bg={themes.colors.light} borderRadius={15} padding={3}>
          <Skeleton height="25%" width="100%" borderRadius={8} marginBottom={5} />
          <Skeleton height="25%" width="100%" borderRadius={8} marginBottom={5} />
          <Skeleton height="25%" width="100%" borderRadius={8} marginBottom={5} />
        </Box>
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
        <Box
          width="85%"
          height={75}
          boxShadow="xl"
          bg={themes.colors.light}
          borderRadius={15}
          padding={5}
          display="flex"
          alignItems="center"
          flexDirection="row"
        >
          <SkeletonCircle height="50px" width="50px" marginRight={5} />
          <Stack width="90%">
            <Skeleton height="20px" width="100%" borderRadius={8} />
            <Skeleton height="20px" width="100%" borderRadius={8} />
          </Stack>
        </Box>
        <Box
          width="85%"
          height={75}
          boxShadow="xl"
          bg={themes.colors.light}
          borderRadius={15}
          padding={5}
          display="flex"
          alignItems="center"
          flexDirection="row"
        >
          <SkeletonCircle height="50px" width="50px" marginRight={5} />
          <Stack width="90%">
            <Skeleton height="20px" width="100%" borderRadius={8} />
            <Skeleton height="20px" width="100%" borderRadius={8} />
          </Stack>
        </Box>
        <Box
          width="85%"
          height={75}
          boxShadow="xl"
          bg={themes.colors.light}
          borderRadius={15}
          padding={5}
          display="flex"
          alignItems="center"
          flexDirection="row"
        >
          <SkeletonCircle height="50px" width="50px" marginRight={5} />
          <Stack width="90%">
            <Skeleton height="20px" width="100%" borderRadius={8} />
            <Skeleton height="20px" width="100%" borderRadius={8} />
          </Stack>
        </Box>
        <Button colorScheme="blackAlpha">Ver todos</Button>
      </GridItem>
      <GridItem colSpan={3} rowSpan={5} display="flex" alignItems="flex-start" justifyContent="center">
        <Box width={250} height="90%" boxShadow="xl" bg={themes.colors.light} borderRadius={15} padding={3}>
          <Skeleton height="20%" width="100%" borderRadius={8} marginBottom={5} />
          <Skeleton height="20%" width="100%" borderRadius={8} marginBottom={5} />
          <Skeleton height="20%" width="100%" borderRadius={8} marginBottom={5} />
          <Skeleton height="20%" width="100%" borderRadius={8} marginBottom={5} />
        </Box>
      </GridItem>
    </Grid>
  );
}
