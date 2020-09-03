import React, {Fragment, useContext} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import AuthContext from '../ContextAPIs/auth/authContext'
import InvoiceContext from '../ContextAPIs/invoice/invoiceContext'

import '../css/App.css'

const AuthNav = () => {
  const authContext = useContext(AuthContext)
  const {clearInvoices} = useContext(InvoiceContext)

  const {isAuthenticated, logout, user} = authContext

  const onLogout = () => {
    logout()
    clearInvoices()
  }

  const authLinks = (
    <Fragment>
      Welcome {''}
      {user && user.firstName}
      <div>
        <a onClick={onLogout} href='#!'>
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span>
          </a>
      </div>
        
      
    </Fragment>
  )

  const guestLinks = (
    <Fragment>
      <div className='col'>
        <div className='row'>
        <Link className='btn btn-outline-light' to='/login'>Login</Link>  
        </div>
        <div className='row'>
        <Link className='btn btn-outline-light' to='/register'>Register</Link>  
        </div>
      </div>
        
    
    </Fragment>
  )

  return (
    
      <div >
          {isAuthenticated ? authLinks : guestLinks}
    </div>
  )
}

AuthNav.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
}

// AuthNav.defaultProps = {
//   title: 'ReadingCom',
//   icon: 'fas fa-id-card-alt'
// }

export default AuthNav
