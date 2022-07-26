import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SkeletonCircle,
  Spacer,
  Tabs,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { selectUser } from '@/redux/features/userSlice';
import type { RootState } from '@/redux/store';

import DashboardNavLink from './DashboardNavLink';
import Logo from './Logo';

const DashboardNav = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const user = useSelector(selectUser);
  const router = useRouter();
  const toast = useToast();
  const error = useSelector((state: RootState) => state.users.error);
  const userStatus = useSelector((state: RootState) => state.users.status);

  const logOut = async () => {
    toast({
      status: 'loading',
      description: 'Logging out',
      position: 'top-right',
      duration: 5000,
    });
    await axios.post('/api/logout');
    router.push('/signin');
  };

  let avatar;

  if (userStatus === 'loading') {
    avatar = <SkeletonCircle size="8" />;
  } else if (userStatus === 'succeeded') {
    avatar = <Avatar size="sm" name={user.email} />;
  } else if (userStatus === 'failed') {
    avatar = <Text color="red.500">{error}</Text>;
  }

  return (
    <Box borderColor="gray.200" borderBottomWidth={1}>
      <Container maxW="7xl">
        <chakra.header
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          pt={4}
          pb={9}
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
            <HStack>
              <Flex>
                <Logo />
              </Flex>
            </HStack>
            <HStack spacing={3} display="flex" alignItems="center">
              <Menu>
                <MenuButton>{avatar}</MenuButton>
                <MenuList>
                  <MenuItem onClick={logOut}>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </chakra.header>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          mx={2}
          borderWidth={0}
          overflowX="auto"
        >
          <Tabs
            defaultIndex={1}
            border="none"
            borderBottom="transparent"
            colorScheme="brand"
          >
            <HStack spacing={4}>
              <DashboardNavLink href="/dashboard" text="Overview" />
              <Spacer />
              <DashboardNavLink href="/projects" text="Portfolio" />
            </HStack>
          </Tabs>
        </Flex>
      </Container>
    </Box>
  );
};

export default DashboardNav;
