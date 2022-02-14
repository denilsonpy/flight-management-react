import React, { ReactNode } from 'react';
import {
  Box, Link, Text, LinkProps,
} from '@chakra-ui/react';

import themes from '../../constants/themes';

type Props = LinkProps & {
  label: string;
  icon: ReactNode;
}

export default function AsideRoute({ label, icon, ...rest }: Props) {
  return (
    <Link
      w="99%"
      h={58}
      bg={themes.colors.secondaryLow}
      color={themes.colors.light}
      borderRightRadius={20}
      display="flex"
      alignItems="center"
      padding={30}
      boxShadow="xl"
      {...rest}
    >
      <Box marginRight={15}>
        {icon}
      </Box>

      <Text fontSize={18} fontWeight="500">{label}</Text>
    </Link>
  );
}
