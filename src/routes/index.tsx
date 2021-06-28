import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import AuthRoutes from './auth.routes'
import LoginRoutes from './login.routes'

const Routes = () => {
  const { auth } = useSelector((state: RootStateOrAny) => state)

  return (
    auth.token ? <AuthRoutes /> : <LoginRoutes />
  ) 
}

export default Routes