import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import type { FormEvent } from 'react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { addResume } from '@/redux/features/resumeSlice';
import type { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';

const ResumeUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const toast = useToast();
  const dispatch = useAppDispatch();
  const resumeStatus = useSelector((state: RootState) => state.resumes.status);

  const handleFileChange = (event: FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target?.files && target?.files[0]) {
      const singleFile = target?.files[0];
      setFile(singleFile);
    }
  };

  const handleSubmit = async (event: {
    target: any;
    preventDefault: () => void;
  }) => {
    event.preventDefault();
    const body = new FormData();
    body.append('file', file as unknown as string);

    try {
      // @ts-expect-error
      await dispatch(addResume(body)).unwrap();
      toast({
        title: 'Resume Uploaded',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: 'Error Occured! Try Again',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel fontSize="sm" htmlFor="resume">
            Upload resume
          </FormLabel>
          <Input
            required
            id="resume"
            type="file"
            accept=".pdf,.doc"
            onChange={handleFileChange}
          />
        </FormControl>
        <Button
          isLoading={resumeStatus === 'loading'}
          type="submit"
          my={2}
          variant="primary"
          size="sm"
        >
          Upload
        </Button>
        <FormControl>
          <FormHelperText fontSize="sm">upload your resume</FormHelperText>
        </FormControl>
      </form>
    </Box>
  );
};

export default ResumeUploadForm;
