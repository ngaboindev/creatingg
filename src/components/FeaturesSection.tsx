import { Box, chakra, Flex, Icon, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { IoDocumentAttachOutline, IoShareSocialOutline } from 'react-icons/io5';

const FeaturesSection = () => {
  // @ts-expect-error
  const Feature = (props) => {
    return (
      <Box>
        <Icon
          boxSize={12}
          _light={{
            color: 'brand.700',
          }}
          mb={4}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          as={props.icon}
        />
        <chakra.h3
          mb={3}
          fontSize="lg"
          lineHeight="shorter"
          fontWeight="bold"
          _light={{
            color: 'gray.900',
          }}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          lineHeight="tall"
          color="gray.600"
          _dark={{
            color: 'gray.400',
          }}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: '#3e3e3e',
      }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={20}
        px={{
          base: 4,
          lg: 16,
          xl: 24,
        }}
        py={20}
        mx="auto"
        bg="white"
        _dark={{
          bg: 'gray.800',
        }}
        shadow="xl"
      >
        <Feature title="Resume" icon={IoDocumentAttachOutline}>
          Upload your resume so recruiters have an easy way to see your
          education professional experience, and preferred contact information.
        </Feature>

        <Feature title="Projects" icon={CgWorkAlt}>
          Add your projects to your portfolio. Here you add project details, and
          other details. This is where you really show off your skills.
        </Feature>

        <Feature title="Socials" icon={IoShareSocialOutline}>
          Link your Twitter, LinkedIn, and GitHub. This helps recruiters check
          you out across the board - all from one quick source.
        </Feature>
      </SimpleGrid>
    </Flex>
  );
};

export default FeaturesSection;
