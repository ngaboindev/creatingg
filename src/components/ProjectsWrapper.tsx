import { Box, Center, Grid, GridItem, Heading } from '@chakra-ui/react';

import type { Project } from '@/types/project';

import ProjectItem from './ProjectItem';

type ProjectsWrapperProps = {
  projects: Project[];
  hasActions: boolean;
};

const ProjectsWrapper = (props: ProjectsWrapperProps) => {
  return (
    <>
      {!Object.values(props.projects).length && (
        <Box>
          <Center>
            <Heading fontSize="lg">No Projects Yet</Heading>
          </Center>
        </Box>
      )}
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={6}
      >
        {Object.values(props.projects).map((project) => (
          <GridItem key={project.id}>
            <ProjectItem project={project} hasActions={props.hasActions} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default ProjectsWrapper;
