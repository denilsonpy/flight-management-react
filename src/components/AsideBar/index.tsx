import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  HiClipboardList, HiTrendingUp, HiServer, HiUserCircle,
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

import AsideRoute from '../AsideRoute';

export default function AsideBar() {
  return (
    <Box w="100%" h="100%" display="flex" flexDirection="column" gap={2} position="relative">
      <AsideRoute icon={<HiTrendingUp fontSize={24} />} label="Dashboard" />
      <AsideRoute icon={<HiClipboardList fontSize={24} />} label="Missions" />
      <AsideRoute icon={<HiUserCircle fontSize={24} />} label="My account" />
      <AsideRoute icon={<HiServer fontSize={24} />} label="Aeroclub" />
      <AsideRoute
        icon={<FaGithub fontSize={24} />}
        label="Source code"
        position="absolute"
        bottom={10}
      />
    </Box>
  );
}
