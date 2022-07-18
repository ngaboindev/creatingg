import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// @ts-ignore
import theme from '@/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;