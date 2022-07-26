import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import React, { useState } from 'react';

import { PasswordField } from '@/components/PasswordField';

import Logo from './Logo';

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const passwordError = password === '';
  const emailError = email === '';

  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${window.location.origin}/api/${mode}`, { email, password })
      .then(() => {
        toast({
          description: `${mode} successful`,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        router.push('/dashboard');
      })
      .catch(({ response: data }) => {
        toast({
          title: 'Error Occured!',
          description: data.data.error,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container
      maxW="lg"
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Logo />
          </Center>
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">
                {' '}
                {mode === 'signin' ? "Don't" : 'Already'} have an account?
              </Text>
              <NextLink
                href={mode === 'signin' ? '/signup' : '/signin'}
                passHref
              >
                <Link color="blue.500">
                  {mode === 'signin' ? 'Sign up' : 'Sign In'}
                </Link>
              </NextLink>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl isInvalid={emailError}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                  {emailError && (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={passwordError}>
                  <PasswordField
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Stack>
              <Stack spacing="6">
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  textTransform="uppercase"
                >
                  {mode}
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default AuthForm;
