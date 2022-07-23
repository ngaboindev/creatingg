import * as React from 'react';

import AuthForm from '@/components/AuthForm';
import { Meta } from '@/layouts/Meta';

function Signup(): JSX.Element {
  return (
    <>
      <Meta title="Sign Up | Creatingg" />
      <AuthForm mode="signup" />
    </>
  );
}

export default Signup;
