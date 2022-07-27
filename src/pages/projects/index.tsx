import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ProjectsLoadingSkeleton from '@/components/ProjectsLoadingSkeleton';
import ProjectsWrapper from '@/components/ProjectsWrapper';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Meta } from '@/layouts/Meta';
import { fetchProjects, getProjects } from '@/redux/features/projectSlice';
import type { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';

const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useSelector(getProjects);
  const projectsStatus = useSelector(
    (state: RootState) => state.projects.status
  );

  useEffect(() => {
    // @ts-expect-error
    dispatch(fetchProjects());
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let projectsContainer;

  if (projectsStatus === 'loading') {
    projectsContainer = <ProjectsLoadingSkeleton />;
  } else if (projectsStatus === 'succeeded') {
    projectsContainer = <ProjectsWrapper projects={projects} hasActions />;
  }

  return (
    <DashboardLayout meta={<Meta title="Project" />}>
      <Box>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          gap={1}
          justifyContent="space-between"
          pb="50px"
        >
          <Heading fontSize="xl">Projects</Heading>
          <Button variant="primary">
            <NextLink href="/projects/create">
              <a>Create Project</a>
            </NextLink>
          </Button>
        </Flex>
        {projectsContainer}
      </Box>
    </DashboardLayout>
  );
};

export default Projects;
