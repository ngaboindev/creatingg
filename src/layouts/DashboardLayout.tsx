import { Container, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardNav from '@/components/DashboardNav';
import Footer from '@/components/Footer';
import { fetchUser } from '@/redux/features/userSlice';
import type { RootState } from '@/redux/store';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const DashboardLayout = (props: IMainProps) => {
  const userStatus = useSelector((state: RootState) => state.users.status);
  const dispatch = useDispatch();
  // fetching auth user
  useEffect(() => {
    if (userStatus === 'idle') {
      // @ts-expect-error
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);

  return (
    <Flex direction="column" minHeight="100vh" justifyContent="space-between">
      {props.meta}
      <DashboardNav />
      <Container mb="auto" maxW="7xl" pt="42px">
        {props.children}
      </Container>
      <Footer />
    </Flex>
  );
};

export default DashboardLayout;
