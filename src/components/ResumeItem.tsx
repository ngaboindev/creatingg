import { Box, Flex, Icon, IconButton, Link, useToast } from '@chakra-ui/react';
import React from 'react';
import { IoDocumentText } from 'react-icons/io5';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { deleteResume } from '@/redux/features/resumeSlice';
import { useAppDispatch } from '@/redux/store';

type Resume = {
  createdAt?: string;
  id?: number;
  url?: string;
  userId?: number;
  updatedAt?: number;
};

type MainProps = {
  resume: Resume;
};

const ResumeItem = (props: MainProps) => {
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleDeleteResume = async () => {
    try {
      toast({
        title: 'Deleting resume',
        status: 'loading',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });

      // @ts-expect-error
      await dispatch(deleteResume(props.resume.id)).unwrap();
      toast({
        title: 'Resume Deleted',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: 'Error occured! try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box rounded="lg" shadow="md" p={4}>
      <Flex align="center" justify="space-between" gap={2}>
        <Flex align="center" gap="2">
          <Icon as={IoDocumentText} color="brand.400" fontSize="4xl" />
          <Box>
            <Link href={props.resume.url} target="_blank" fontWeight="semibold">
              My Resume
            </Link>
          </Box>
        </Flex>
        <Box>
          <IconButton
            onClick={handleDeleteResume}
            aria-label="Delete Resume"
            size="lg"
            variant="ghost"
            colorScheme="red"
            icon={<RiDeleteBin5Fill />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ResumeItem;
