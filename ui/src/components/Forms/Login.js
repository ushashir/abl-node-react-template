import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../ContextAPIs/alert/alertContext';
import AuthContext from '../../ContextAPIs/auth/authContext';
import { Link } from 'react-router-dom';

import '../../css/App.css'

const Login = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const initialState = {
    email: '',
    password: ''
  }

  const {setAlert} = alertContext
  const {login, error, clearErrors, isAuthenticated} = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if (error && error.keyword === 'invalid') {
      setAlert(error.msg, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const [user, setUser] = useState(initialState)

  const {email, password} = user

  const onChange = e => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (email === '' || password === '') {
      setAlert('Please enter all fields', 'danger')
    } else {
      login({email, password})
    }
  }

  return (
        <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h2>LOGIN </h2>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"></i></span>
                <span><i className="fab fa-google-plus-square"></i></span>
                <span><i className="fab fa-twitter-square"></i></span>
              </div>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit} >
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" name="email" value={email} onChange={onChange} placeholder="Email" />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" className="form-control" name="password" value={password} onChange={onChange} placeholder="Password" />
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox" />Remember Me
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn" />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account? <span><Link to='/register'>Sign Up</Link></span> 
              </div>
              <div className="d-flex justify-content-center">
                <a href="no">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
        </div>        
  )
}
export default Login;
