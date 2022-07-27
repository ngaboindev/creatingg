import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  addUserInfo,
  selectUser,
  updateUserInfo,
} from '@/redux/features/userSlice';
import type { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/store';

import PersonalInfoFormSkeleton from './PersonalInfoFormSkeleton';

const PersonalInfoForm = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(selectUser);
  const userStatus = useSelector((state: RootState) => state.users.status);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [names, setNames] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const body = { names, githubUrl, linkedinUrl, twitterUrl };
    try {
      await dispatch(
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        !user?.userInfo ? addUserInfo(body) : updateUserInfo(body)
      ).unwrap();
      toast({
        title: 'Your info updated successful',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } catch (error) {
      toast({
        title: 'Names already exists, Try again',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsLoading(false);
      setNames('');
      setGithubUrl('');
      setLinkedinUrl('');
      setTwitterUrl('');
    }
  };
  useEffect(() => {
    if (userStatus === 'succeeded' && user.userInfo) {
      setNames(user.userInfo?.names as string);
      setGithubUrl(user.userInfo?.githubUrl as string);
      setLinkedinUrl(user.userInfo?.linkedinUrl as string);
      setTwitterUrl(user.userInfo?.twitterUrl as string);
    }
  }, [user]);

  if (userStatus === 'loading') {
    return <PersonalInfoFormSkeleton />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack pb={2} spacing={3}>
        <Text fontSize="xl" fontWeight="semibold">
          Personal information
        </Text>
        <FormControl>
          <FormLabel fontSize="sm">Name</FormLabel>
          <Input
            value={names}
            onChange={(e) => setNames(e.target.value)}
            placeholder="full names"
            required
            type="text"
          />
          <FormHelperText>
            {' '}
            Also name will be used as your portfolio domain
          </FormHelperText>
        </FormControl>
      </Stack>

      <Stack py={2} spacing={3}>
        <Text fontSize="sm">Let us slide into those LinkedIn DMs 👀</Text>
        <FormControl>
          <FormLabel fontSize="sm">LinkedIn</FormLabel>
          <Input
            type="text"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            placeholder="https://www.linkedin.com/in/robert-ngabo-63118b169/"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">GitHub</FormLabel>
          <Input
            type="text"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="http://github.com/ngaboindev"
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="sm">Twitter</FormLabel>
          <Input
            value={twitterUrl}
            onChange={(e) => setTwitterUrl(e.target.value)}
            type="text"
            placeholder="https://twitter.com/robert_ngabo"
          />
        </FormControl>
      </Stack>
      <Button
        isLoading={isLoading}
        loadingText="Submitting"
        textAlign="center"
        type="submit"
        my={3}
        w="full"
        variant="primary"
      >
        Save
      </Button>
    </form>
  );
};

export default PersonalInfoForm;
