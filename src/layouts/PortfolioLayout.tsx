import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import PortfolioNav from '@/components/PortfolioNav';

type IMainProps = {
  slug: string;
  meta: ReactNode;
  children: ReactNode;
};

const PortfolioLayout = (props: IMainProps) => {
  return (
    <Flex direction="column" minHeight="100vh" justifyContent="space-between">
      {props.meta}
      <PortfolioNav slug={props.slug} />
      {props.children}
      <Box py={2} />
    </Flex>
  );
};

export default PortfolioLayout;
