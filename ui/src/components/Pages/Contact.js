import React, { Component } from 'react'
import ContactForm from "../Common/ContactForm";
// import { withFormik } from "formik";
import emailjs from "emailjs-com";

class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       email: '',
       phone: '',
       message: '',
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
        message: '',
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
    const {name, email, message} = this.state
    if (name !== '' && email !== '' && message !== '') {
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
      <section className="page-section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Get in touch with Us.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ContactForm {...this.state} onChangeEvent={this.onChangeEvent} onSubmitEvent={this.onSubmitEvent} />
          </div>
        </div>
      </div>
    </section>  
    )
  }
}


export default Contact;
