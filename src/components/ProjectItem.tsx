import {
  Box,
  chakra,
  Flex,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { FaLink } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { removeProject } from '@/redux/features/projectSlice';
import { useAppDispatch } from '@/redux/store';
import type { Project } from '@/types/project';

const ProjectItem = (props: { project: Project; hasActions: boolean }) => {
  const dispatch = useAppDispatch();
  const toast = useToast();
  const deleteProject = async () => {
    try {
      toast({
        title: 'Deleting project',
        status: 'loading',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
      // @ts-expect-error
      await dispatch(removeProject(props.project.id)).unwrap();
      toast({
        title: 'Project Deleted',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error) {
      toast({
        title: 'Error occured! try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <Box
      mx="auto"
      rounded="lg"
      border="2px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      maxW="2xl"
    >
      <Box p={6}>
        <Box py={2}>
          <Flex py={2} justifyContent="space-between" alignItems="center">
            <Text
              display="block"
              color="gray.800"
              _dark={{
                color: 'white',
              }}
              fontWeight="bold"
              fontSize="md"
              mt={2}
              _hover={{
                color: 'gray.600',
              }}
            >
              {props.project.title}
            </Text>
            {props.project.projectLink.length ? (
              <chakra.a href={props.project.projectLink} target="_blank">
                <Icon
                  _hover={{ color: 'brand.500' }}
                  fontSize="sm"
                  as={FaLink}
                />
              </chakra.a>
            ) : (
              ''
            )}
          </Flex>
          <Text fontSize="sm">{props.project.description}</Text>
        </Box>
        {props.hasActions && (
          <Flex gap={2} alignItems="center" justifyContent="right">
            <Box>
              <IconButton
                onClick={deleteProject}
                aria-label="project-delete"
                bg="red.300"
                _dark={{
                  bg: 'red.400',
                }}
                icon={<MdDelete />}
              />
            </Box>
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default ProjectItem;
