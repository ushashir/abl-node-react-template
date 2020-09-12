import React, { Component } from 'react'
import BookingForm from '../Forms/BookingForm';

// import { withFormik } from "formik";
import emailjs from "emailjs-com";

// import{ init } from 'emailjs-com';
// init("user_6ucmwwN6OsDA9xMAHe00J");

class Booking extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       organisation: '',
       event: '',
       date: '',
       about: '',
       sent: ''
    }
    this.onChangeEvent = this.onChangeEvent.bind(this)
  }
  clearState = (sent) => {
    if (sent) {
      this.setState({
        name: '',
       email: '',
       phone: '',
       organisation: '',
       event: '',
       date: '',
       about: ''
      })

      setTimeout(() => {
        this.setState({
          sent: ''
        })
      }, 5000);
    } else {
      this.setState({
        sent: 'fail'
      })
      setTimeout(() => {
        this.setState({
          sent: ''
        })
      }, 5000);
    }
  }
  onChangeEvent = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })  
  }
  onSubmitEvent = (event) => {
    event.preventDefault()
    const templateParams = {...this.state}
    const {name, email, date, about} = this.state
    if (name !== '' && email !== '' && date !== '' && about !== '') {
      this.setState({
        sent: 'sending'
      })
      emailjs.send('gmail', 'template_cJaDt3lL', templateParams, 'user_ijdS2pAy9Y4kPjCYtCZxS')
      .then((result) => {
        this.setState({
          sent: 'success'
        })
          this.clearState(true)
      }, (error) => {
          this.clearState(false)
      });
    } else {
    }
  }

  render() {
    return (
      <section className="page-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="section-heading text-uppercase">Fill the form below to book for hall</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <BookingForm {...this.state} onChangeEvent={this.onChangeEvent} onSubmitEvent={this.onSubmitEvent} />
          </div>
        </div>
      </div>
    </section>  
    )
  }
}


export default Booking;
