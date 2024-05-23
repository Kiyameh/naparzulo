import {Outlet, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import {AuthContext} from '../../context/AuthContext'
import {DetailDataProvider} from '../../context/DetailDataContext'

function ProtectedViews() {
  const {isLogin, user} = useContext(AuthContext)

  return isLogin ? (
    user.role === 'edit' ? (
      <DetailDataProvider>
        <Outlet />
      </DetailDataProvider>
    ) : (
      <Navigate to="/unautorized" />
    )
  ) : (
    <Navigate
      to="/login"
      replace
    />
  )
}

export default ProtectedViews
