import React, { useEffect, useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import themes from '../../constants/themes';

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box
      color={themes.colors.secondary}
      fontSize={18}
      d="flex"
      alignItems="center"
      gap={10}
    >
      <Text>
        {date.toLocaleString('pt-br', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </Text>

      <Text>
        {date.toLocaleDateString('pt-br', {
          dateStyle: 'medium',
        })}
      </Text>
    </Box>
  );
}
