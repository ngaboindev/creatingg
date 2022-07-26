import { Container } from '@chakra-ui/react';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DashboardNav from '@/components/DashboardNav';
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
    <>
      {props.meta}
      <DashboardNav />
      <Container maxW="7xl" pt="60px">
        {props.children}
      </Container>
    </>
  );
};

export default DashboardLayout;
