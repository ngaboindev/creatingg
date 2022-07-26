import { chakra } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type IMainProps = {
  href: string;
  text: string;
};

const DashboardNavLink = (props: IMainProps) => {
  const router = useRouter();
  const isActive = router.pathname === props.href;
  return (
    <Link href={props.href}>
      <chakra.a
        py={4}
        cursor="pointer"
        fontWeight={isActive ? 'bold' : 'normal'}
        borderBottom={'1px'}
        borderColor={`${isActive ? 'brand.500' : 'transparent'}`}
      >
        {props.text}
      </chakra.a>
    </Link>
  );
};

export default DashboardNavLink;
