import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';

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
            <Stack pb={6} spacing={3}>
              <Text fontSize="xl" fontWeight="semibold">
                Personal information
              </Text>
              <form>
                <FormControl>
                  <FormLabel fontSize="sm">Name</FormLabel>
                  <Input type="text" />
                  <FormHelperText>
                    {' '}
                    Also name will be used as your portfolio domain
                  </FormHelperText>
                </FormControl>
                <Button my={3} size="sm" variant="primary">
                  Save
                </Button>
              </form>
            </Stack>
            <Divider />
            <Stack mt={8} spacing={3}>
              <Text fontSize="xl" fontWeight="semibold">
                Socials
              </Text>
              <Text fontSize="sm">Let us slide into those LinkedIn DMs 👀</Text>
              <form>
                <FormControl>
                  <FormLabel fontSize="sm">LinkedIn</FormLabel>
                  <Input
                    type="text"
                    placeholder="https://www.linkedin.com/in/robert-ngabo-63118b169/"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">GitHub</FormLabel>
                  <Input
                    type="text"
                    placeholder="http://github.com/ngaboindev"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="sm">Twitter</FormLabel>
                  <Input
                    type="text"
                    placeholder="https://twitter.com/robert_ngabo"
                  />
                </FormControl>
                <Button my={3} size="sm" variant="primary">
                  Save
                </Button>
              </form>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default dashboard;
