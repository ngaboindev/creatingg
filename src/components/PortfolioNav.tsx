import { Box, chakra, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import React from 'react';

import ModeToggler from './ModeToggler';

type PortfolioNavLinkProps = {
  href: string;
  children: ReactNode;
};

const PortfolioNavLink = (props: PortfolioNavLinkProps) => {
  const router = useRouter();
  const isActive = router.asPath === props.href;
  return (
    <Link href={props.href}>
      <chakra.a cursor="pointer" fontWeight={isActive ? 'bold' : 'normal'}>
        {props.children}
      </chakra.a>
    </Link>
  );
};

const PortfolioNav = (props: { slug: string }) => {
  return (
    <Box>
      <Flex justifyContent="space-evenly" alignItems="center">
        <Flex alignItems="center" justifyContent="center" py={10} gap={4}>
          <PortfolioNavLink href={`/me/${props.slug}/`}>Home</PortfolioNavLink>
          <PortfolioNavLink href={`/me/${props.slug}/portfolio/`}>
            Portfolio
          </PortfolioNavLink>
        </Flex>
        <Box>
          <ModeToggler />
        </Box>
      </Flex>
    </Box>
  );
};

export default PortfolioNav;
