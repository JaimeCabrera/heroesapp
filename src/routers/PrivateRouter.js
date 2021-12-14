import React from 'react'
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRouter = ({ isAuth, element, ...rest }) => {
  const location = useLocation();
  const { pathname } = location

  // guardar el pathname o ruta 
  localStorage.setItem('lastPath', pathname)


  return (
    isAuth ? element : < Navigate to="/login" />
  )

}


PrivateRouter.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  element: PropTypes.object.isRequired
}