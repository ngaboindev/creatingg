import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

const ProjectsLoadingSkeleton = () => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
    >
      {new Array(8).fill('').map((_, index) => (
        <GridItem key={`projects-skeleton-${index}`}>
          <Skeleton width="full" rounded="md" height="200px" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectsLoadingSkeleton;
