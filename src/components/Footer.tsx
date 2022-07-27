import { chakra, Flex } from '@chakra-ui/react';
import Image from 'next/image';

import Logo from './Logo';

const Footer = () => {
  return (
    <Flex
      w="full"
      as="footer"
      mt="50px"
      flexDir={{
        base: 'column',
        sm: 'row',
      }}
      align="center"
      justify="space-between"
      px="6"
      py="1"
      bg="#edf3f8"
      _dark={{
        bg: '#3e3e3e',
      }}
    >
      <chakra.a
        href="#"
        fontSize="lg"
        fontWeight="bold"
        color="brand.600"
        _dark={{
          color: 'brand.300',
          _hover: {
            color: 'gray.300',
          },
        }}
        _hover={{
          color: 'gray.700',
        }}
      >
        <Logo />
      </chakra.a>

      <chakra.p
        py={{
          base: '2',
          sm: '0',
        }}
        fontSize="sm"
        color="gray.800"
        _dark={{
          color: 'white',
        }}
      >
        Made by{' '}
        <chakra.a
          color="black"
          fontWeight="semibold"
          _hover={{
            color: 'brand.800',
            _dark: { color: 'brand.600' },
          }}
          _dark={{
            color: 'white',
          }}
          href="https://www.robertngabo.tech/"
          target="__blank"
        >
          Robert Ngabo
        </chakra.a>{' '}
        for the{' '}
        <chakra.a
          color="black"
          fontWeight="semibold"
          _hover={{
            color: 'brand.500',
            _dark: { color: 'brand.300' },
          }}
          _dark={{
            color: 'white',
          }}
          href="https://planetscale.com/"
          target="__blank"
        >
          PlanetScale
        </chakra.a>{' '}
        X{' '}
        <chakra.a
          color="blue.400"
          href="https://hashnode.com/"
          target="__blank"
          fontWeight="semibold"
          _hover={{
            color: 'brand.600',
            _dark: { color: 'brand.300' },
          }}
          _dark={{
            color: 'blue.300',
          }}
        >
          Hashnode
        </chakra.a>{' '}
        Hackathon
      </chakra.p>

      <Flex mx="-2">
        <chakra.a
          href="https://townhall.hashnode.com/planetscale-hackathon?source=creatingg_project"
          target="__blank"
        >
          <Image
            alt="hackthon"
            src="/assets/images/hackathon.svg"
            width={100}
            height={50}
          />
        </chakra.a>
      </Flex>
    </Flex>
  );
};

export default Footer;
