import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
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
      <Footer />
    </Flex>
  );
};

export default PortfolioLayout;
