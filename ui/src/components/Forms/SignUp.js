import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../ContextAPIs/alert/alertContext';
import AuthContext from '../../ContextAPIs/auth/authContext';
import { Link } from 'react-router-dom';

import '../../css/App.css'

const Register = props => {
  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {setAlert} = alertContext
  const {register, error, clearErrors, isAuthenticated} = authContext

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/')
    }

    if (error && error.keyword === 'exists') {
      setAlert(error.msg, 'danger')
      clearErrors()
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history])

  const initialState = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNo: '',
    address: '',
    occupation: '',
    institution: '',
    course: '',
    
  }

  const [user, setUser] = useState(initialState)

  const { email, 
          password, 
          confirmPassword, 
          firstName, 
          lastName, 
          phoneNo, 
          address, 
          occupation, 
          institution, 
          course, 
                  } = user

  const onChange = e => setUser({...user, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      phoneNo === '' ||
      address === '' ||
      occupation === '' 
    ) {
      setAlert('Please enter all fields', 'danger')
    } else if (password !== confirmPassword) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({email,password,firstName,lastName,phoneNo,address,occupation,institution,course })
    }
  }

  return (
    <section className='page-section'>
    <div className="container" role="form">
            <form onSubmit={onSubmit} className="form-horizontal" >
                <h2>Registration</h2>
                <h6>Fill the fields below to register. * Fields are required</h6> <br />
                <div className="form-group">
                  <div className='row'>
                    <label className="col-md-3 control-label">First Name*</label>
                    <div className="col-sm-9">
                        <input type="text" name="firstName" value={firstName} onChange={onChange} required placeholder="First Name" className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                    <label className="col-sm-3 control-label">Last Name*</label>
                    <div className="col-sm-9">
                        <input type="text" name="lastName" value={lastName} onChange={onChange} required placeholder="Last Name" className="form-control"/>
                    </div>
                  </div>
                </div>
                {/* <div className="form-group">
                  <div className='row'>
                    <label className="control-label col-sm-3">Gender*</label>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col">
                                <label className="radio-inline">
                                    <input type="radio" id="femaleRadio" value="Female"/> Female
                                </label>
                            </div>
                            <div className="col">
                                <label className="radio-inline">
                                    <input type="radio" id="maleRadio" value="Male" /> Male
                                </label>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> */}
                <div className="form-group">
                  <div className='row'>
                    <label className="col-sm-3 control-label">Email* </label>
                    <div className="col-sm-9">
                        <input type="email" name="email" value={email} onChange={onChange} required placeholder="Email" className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                    <label className="col-sm-3 control-label">Password*</label>
                    <div className="col-sm-9">
                        <input type="password" name="password" value={password} onChange={onChange} required placeholder="Password" className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                    <label className="col-sm-3 control-label">Confirm Password*</label>
                    <div className="col-sm-9">
                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} required minLength='4' placeholder="Confirm Password" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                    <label className="col-sm-3 control-label">Phone No* </label>
                    <div className="col-sm-9">
                        <input type="number" name="phoneNo" value={phoneNo} onChange={onChange} required minLength='4' placeholder="Phone number" className="form-control" />
                        <span className="help-block"> <small>Your phone number won't be disclosed anywhere</small></span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                        <label className="col-sm-3 control-label">Address* </label>
                    <div className="col-sm-9">
                        <input type="text" name="address" value={address} onChange={onChange} required placeholder="Address" className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                        <label className="col-sm-3 control-label">Occupation </label>
                    <div className="col-sm-9">
                        <input type="text" name="occupation" value={occupation} onChange={onChange}  placeholder="Occupation" className="form-control" />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                        <label className="col-sm-3 control-label">Institution </label>
                    <div className="col-sm-9">
                        <input type="text" name="institution" value={institution} onChange={onChange} placeholder="Institution (Students only)" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className='row'>
                        <label className="col-sm-3 control-label">Course </label>
                    <div className="col-sm-9">
                        <input type="text" name="course" value={course} onChange={onChange} placeholder="Department / course" className="form-control" />
                    </div>
                    </div>
                </div>
               
                <button type="submit" value='Register' className="btn btn-primary btn-block">Register</button>
                <br />
                <p> Already have an account? <Link to='/login'>Login </Link>Here!</p>
            </form> 
           
        </div> 
        </section>
  )
}

export default Register;
