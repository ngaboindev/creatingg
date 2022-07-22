
import * as React from 'react'

import { Meta } from '@/layouts/Meta'
import AuthForm from '@/components/AuthForm'

function Signin(): JSX.Element {
  return (
    <>
      <Meta title='Sign In | Creatingg' />
      <AuthForm mode="signin" />
    </>
  )
}


export default Signin