import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import type { FormEvent } from 'react';
import React, { useState } from 'react';

import { addProject } from '@/redux/features/projectSlice';
import { useAppDispatch } from '@/redux/store';

const AddProjectForm = () => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projectLink, setProjectLink] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // @ts-expect-error
      await dispatch(addProject({ title, description, projectLink })).unwrap();
      toast({
        title: 'Project Added',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      toast({
        title: 'Error occured! Try Again',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setTitle('');
      setDescription('');
      setProjectLink('');
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <FormControl>
            <FormLabel>Tittle</FormLabel>
            <Input
              placeholder="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              variant="filled"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
          </FormControl>
          <FormControl>
            <FormLabel>Project Link</FormLabel>
            <Input
              placeholder="https://creatingg.vercel.app/"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </FormControl>
          <Button
            variant="primary"
            loadingText="Submitting"
            type="submit"
            isLoading={isLoading}
          >
            Save
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default AddProjectForm;
