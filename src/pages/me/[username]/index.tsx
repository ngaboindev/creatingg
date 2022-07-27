import {
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { GetServerSideProps } from 'next';
import Error from 'next/error';
import NextLink from 'next/link';
import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

import { Meta } from '@/layouts/Meta';
import PortfolioLayout from '@/layouts/PortfolioLayout';
import prisma from '@/lib/prisma';

// @ts-expect-error
const PortfolioHomePage = ({ errorCode, user }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }
  const userInfo = JSON.parse(user);
  return (
    <PortfolioLayout
      slug={userInfo.slug}
      meta={<Meta title={`${userInfo.names} | Creatingg`} />}
    >
      <Container maxW="lg">
        <Stack spacing={2}>
          <Text fontSize="md">Hello there, I am</Text>
          <Heading fontSize="5xl" textTransform="capitalize">
            {userInfo.names}
          </Heading>
          <Button variant="primary">
            <NextLink href={`/me/${userInfo.slug}/portfolio`}>
              <a>View Portfolio</a>
            </NextLink>
          </Button>
          {userInfo.user.resume && (
            <Button variant="primary">
              <Link href={userInfo.user.resume.url} target="__blank">
                View Resume
              </Link>
            </Button>
          )}
          <Flex justifyContent="center" py={5} mt={8} gap={2} flexWrap="wrap">
            {!!userInfo.linkedInUrl && (
              <Link href={userInfo.linkedInUrl} target="_blank">
                <Icon
                  _hover={{ color: 'brand.500' }}
                  as={FaLinkedin}
                  fontSize="2xl"
                />
              </Link>
            )}

            {!!userInfo.twitterUrl && (
              <Link href={userInfo.twitterUrl} target="_blank">
                <Icon
                  _hover={{ color: 'brand.500' }}
                  as={FaTwitterSquare}
                  fontSize="2xl"
                />
              </Link>
            )}

            {!!userInfo.githubUrl && (
              <Link href={userInfo.githubUrl} target="_blank">
                <Icon
                  _hover={{ color: 'brand.500' }}
                  as={FaGithubSquare}
                  fontSize="2xl"
                />
              </Link>
            )}
          </Flex>
        </Stack>
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
          resume: true,
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

export default PortfolioHomePage;
