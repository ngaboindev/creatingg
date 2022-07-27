import { Container, Heading } from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import Error from 'next/error';
import React from 'react';

import ProjectsWrapper from '@/components/ProjectsWrapper';
import { Meta } from '@/layouts/Meta';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import prisma from '@/lib/prisma';

// @ts-expect-error
const Portfolio = ({ errorCode, user }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  const userInfo = JSON.parse(user);

  return (
    <PortfolioLayout
      slug={userInfo.slug}
      meta={<Meta title={`${userInfo.names} | Creatingg`} />}
    >
      <Container mb="auto" maxW="6xl">
        <Heading py={4}>Portfolio</Heading>
        <ProjectsWrapper projects={userInfo.user.projects} hasActions={false} />
      </Container>
    </PortfolioLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let errorCode: number | boolean = false;
  const user = await prisma.userInfo.findFirst({
    where: {
      slug: context.query.username as string,
    },
    include: {
      user: {
        include: {
          projects: true,
        },
      },
    },
  });

  if (!user) {
    errorCode = 404;
  }

  return {
    props: { errorCode, user: JSON.stringify(user) },
  };
};

export default Portfolio;
