import { Box, Skeleton, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '@/redux/features/userSlice';
import type { RootState } from '@/redux/store';

import ResumeItem from './ResumeItem';
import ResumeUploadForm from './ResumeUploadForm';

const ResumeWrapper = () => {
  const user = useSelector(selectUser);
  const userStatus = useSelector((state: RootState) => state.users.status);

  let resume;

  if (userStatus === 'loading') {
    resume = (
      <>
        <Skeleton height="70px" />
        <Skeleton height="40px" width="60px" rounded="md" />
      </>
    );
  } else if (userStatus === 'succeeded') {
    resume = user.resume ? (
      <ResumeItem resume={user.resume} />
    ) : (
      <ResumeUploadForm />
    );
  }

  return (
    <Box>
      <Stack spacing={3}>
        <Text fontSize="xl" fontWeight="semibold">
          Resume
        </Text>
        {resume}
      </Stack>
    </Box>
  );
};

export default ResumeWrapper;
