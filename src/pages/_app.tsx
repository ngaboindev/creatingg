import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from '@/redux/store';
import theme from '@/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  </ChakraProvider>
);

export default MyApp;
