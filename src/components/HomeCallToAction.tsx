/* eslint-disable no-sparse-arrays */
import { Box, chakra, Flex, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

const HomeCallToAction = () => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg="gray.50"
        _dark={{
          bg: 'gray.800',
        }}
      >
        <Box
          maxW="7xl"
          w={{
            md: '3xl',
            lg: '4xl',
          }}
          mx="auto"
          py={{
            base: 12,
            lg: 16,
          }}
          px={{
            base: 4,
            lg: 8,
          }}
          display={{
            lg: 'flex',
          }}
          alignItems={{
            lg: 'center',
          }}
          justifyContent={{
            lg: 'space-between',
          }}
        >
          <chakra.h2
            fontSize={{
              base: '3xl',
              sm: '4xl',
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: 'gray.100',
            }}
          >
            <chakra.span display="block">Ready to show off</chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{
                color: 'gray.500',
              }}
            >
              your work?
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{
              base: 'column',
              sm: 'row',
            }}
            mt={{
              base: 8,
              lg: 0,
            }}
            flexShrink={{
              lg: 0,
            }}
          >
            <NextLink href="/signup">
              <Link
                w={['full', '', 'auto']}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                shadow="md"
                _light={{
                  color: 'white',
                }}
                bg="brand.600"
                _dark={{
                  bg: 'brand.500',
                }}
                _hover={{
                  bg: 'brand.700',
                  _dark: {
                    bg: 'brand.600',
                  },
                }}
              >
                Get started
              </Link>
            </NextLink>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default HomeCallToAction;
