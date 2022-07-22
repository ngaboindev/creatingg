import React, { FC, useState } from 'react'
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
} from '@chakra-ui/react'
import { PasswordField } from '@/components/PasswordField'
import NextLink from 'next/link'


const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const passwordError = password === ''
  const emailError = email === ''

  

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoading(true);
    // TODO: AUTH LOGIC
  }


  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center><Text fontWeight="bold" fontSize="2xl">Creatingg</Text></Center>
          <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted"> {mode === 'signin' ? "Don't" : "Already"}  have an account?</Text>
              <NextLink href={mode === 'signin' ? "/signup" : "/signin"} passHref>
              <Link color="blue.500">
                {mode === 'signin'  ? "Sign up" : "Sign In"}
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
                  <Input id="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} type="email" />
                  {emailError && (<FormErrorMessage>Email is required.</FormErrorMessage>)}
              </FormControl>
                <FormControl isInvalid={passwordError}>
                  <PasswordField placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                  {passwordError && (<FormErrorMessage>Password is required.</FormErrorMessage>)}
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button type='submit' variant="primary" isLoading={isLoading} textTransform='uppercase' >{mode}</Button>
            </Stack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Container>
  )
}

export default AuthForm;