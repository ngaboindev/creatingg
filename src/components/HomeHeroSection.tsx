import {
  Box,
  Button,
  chakra,
  Icon,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const HomeHeroSection = () => {
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{
          base: 'full',
          md: 11 / 12,
          xl: 9 / 12,
        }}
        mx="auto"
        textAlign={{
          base: 'left',
          md: 'center',
        }}
      >
        <chakra.h1
          mb={6}
          fontSize={{
            base: '4xl',
            md: '6xl',
          }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{
            base: 'normal',
            md: 'tight',
          }}
          color="gray.900"
          _dark={{
            color: 'gray.100',
          }}
        >
          Show off what {''}
          <Text
            display={{
              base: 'block',
              lg: 'inline',
            }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            you can really
          </Text>{' '}
          {''}
          build.
        </chakra.h1>
        <chakra.p
          px={{
            base: 0,
            lg: 24,
          }}
          mb={6}
          fontSize={{
            base: 'lg',
            md: 'xl',
          }}
          color="gray.600"
          _dark={{
            color: 'gray.300',
          }}
        >
          Showcase your portfolio with a website built in minutes.
        </chakra.p>
        <Stack
          direction={{
            base: 'column',
            sm: 'row',
          }}
          mb={{
            base: 4,
            md: 8,
          }}
          spacing={2}
          justifyContent={{
            sm: 'left',
            md: 'center',
          }}
        >
          <Link href="/signup">
            <Button
              as="a"
              variant="solid"
              colorScheme="brand"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{
                base: 'full',
                sm: 'auto',
              }}
              mb={{
                base: 2,
                sm: 0,
              }}
              size="lg"
              cursor="pointer"
            >
              Get Started
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Link>
        </Stack>
      </Box>
      <Box
        w={{
          base: 'full',
          md: 10 / 12,
        }}
        mx="auto"
        mt={20}
        textAlign="center"
      >
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="/assets/images/window-portfolio.png"
          alt="window portfolio"
        />
      </Box>
    </Box>
  );
};

export default HomeHeroSection;
