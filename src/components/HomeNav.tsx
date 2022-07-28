import {
  Box,
  Button,
  chakra,
  CloseButton,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import Logo from './Logo';

const HomeNav = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  return (
    <React.Fragment>
      <Container maxW="7xl">
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <Flex>
              <chakra.a
                href="/"
                title="Creating"
                display="flex"
                alignItems="center"
              >
                <Logo />
              </chakra.a>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                display={{
                  base: 'none',
                  md: 'inline-flex',
                }}
              >
                <Button size="sm" variant="ghost">
                  <NextLink href="/signin">
                    <a>Sign in</a>
                  </NextLink>
                </Button>
              </HStack>
              <Button size="sm">
                <NextLink href="/signup">
                  <a>Get started</a>
                </NextLink>
              </Button>
              <Box
                display={{
                  base: 'inline-flex',
                  md: 'none',
                }}
              >
                <IconButton
                  display={{
                    base: 'flex',
                    md: 'none',
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: 'inherit',
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />

                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? 'flex' : 'none'}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <Button size="sm" variant="ghost">
                    <NextLink href="/signup">
                      <a>Get started</a>
                    </NextLink>
                  </Button>
                  <Button size="sm" variant="ghost">
                    <NextLink href="/signin">
                      <a>Sign in</a>
                    </NextLink>
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </Container>
    </React.Fragment>
  );
};
export default HomeNav;
