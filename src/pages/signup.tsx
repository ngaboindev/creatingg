
import * as React from 'react'

import { Meta } from '@/layouts/Meta'
import AuthForm from '@/components/AuthForm'

function Signup(): JSX.Element {
  return (
    <>
      <Meta title='Sign Up | Creatingg' />
      <AuthForm mode="signup" />
    </>
  )
}


export default Signup