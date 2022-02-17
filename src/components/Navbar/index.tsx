import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { FaPlaneDeparture } from 'react-icons/fa';
import {
  Box, Heading, Text,
} from '@chakra-ui/react';

import themes from '../../constants/themes';

import Clock from '../Clock';

export default function Navbar() {
  return (
    <Box
      w="100%"
      h={70}
      borderBottomRadius={20}
      bg={themes.colors.light}
      justifyContent="space-between"
      alignItems="center"
      paddingX={35}
      display="flex"
      shadow="xl"
    >
      <Box display="flex" gap={10}>
        <Box display="flex" alignItems="center" gap={2}>
          <FaPlaneDeparture
            color={themes.colors.secondary}
          />
          <Heading
            fontSize={20}
            color={themes.colors.secondary}
            fontWeight="bold"
          >
            FlightManagement
          </Heading>
        </Box>

        <Box>
          <Clock />
        </Box>
      </Box>

      <Box d="flex" alignItems="center" gap={10}>
        <Box d="flex" alignItems="center" gap={10}>
          <Text
            color={themes.colors.secondary}
            fontWeight="bold"
          >
            ALUNO
          </Text>
          <Text color={themes.colors.secondary}>
            Denilson Martins
          </Text>

        </Box>
        <IoLogOutOutline fontSize={30} color={themes.colors.secondary} />
      </Box>
    </Box>
  );
}
