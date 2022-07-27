import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

import AddProjectForm from '@/components/AddProjectForm';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Meta } from '@/layouts/Meta';

const CreateProject = () => {
  return (
    <DashboardLayout meta={<Meta title="Create Project" />}>
      <Box>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          gap={1}
          justifyContent="space-between"
          pb="50px"
        >
          <Heading fontSize="xl">Create Project</Heading>
        </Flex>
        <Container>
          <AddProjectForm />
        </Container>
      </Box>
    </DashboardLayout>
  );
};

export default CreateProject;
