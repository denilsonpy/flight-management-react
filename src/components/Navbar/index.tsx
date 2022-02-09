import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
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
    >
      <Box display="flex" gap={10}>
        <Heading
          fontSize={18}
          color={themes.colors.secondary}
          fontWeight="bold"
        >
          FlightManagement
        </Heading>
        <Box>
          <Clock />
        </Box>
      </Box>

      <Box d="flex" alignItems="center" gap={10}>
        <Box d="flex" alignItems="center" gap={10}>
          <Text>
            Denilson Martins
          </Text>

        </Box>
        <IoLogOutOutline fontSize={30} color={themes.colors.secondary} />
      </Box>
    </Box>
  );
}
