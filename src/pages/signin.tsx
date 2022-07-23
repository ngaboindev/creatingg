import * as React from 'react';

import AuthForm from '@/components/AuthForm';
import { Meta } from '@/layouts/Meta';

function Signin(): JSX.Element {
  return (
    <>
      <Meta title="Sign In | Creatingg" />
      <AuthForm mode="signin" />
    </>
  );
}

export default Signin;
