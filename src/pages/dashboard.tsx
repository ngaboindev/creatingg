import { Box, Grid, GridItem } from '@chakra-ui/react';

import PersonalInfoForm from '@/components/PersonalInfoForm';
import ResumeWrapper from '@/components/ResumeWrapper';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Meta } from '@/layouts/Meta';

const dashboard = () => {
  return (
    <DashboardLayout meta={<Meta title="Dashboard" />}>
      <Box>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={10}
        >
          <GridItem colSpan={1}>
            <ResumeWrapper />
          </GridItem>
          <GridItem colSpan={1}>
            <PersonalInfoForm />
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default dashboard;
