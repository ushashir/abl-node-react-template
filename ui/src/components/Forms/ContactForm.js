import React from 'react';
import Field from "./ContactFields";

const fields = {
  sections: [
    [
      {elementName: 'input', type: "text", id: 'name', name: 'user_name', placeholder: "Enter Name *", required: 'required'},
      {elementName: 'input', type: "email", id: 'email', name: 'user_email', placeholder: "Enter Email *", required: 'required'},
      {elementName: 'input', type: "text", id: 'phone', name: 'user_phone', placeholder: "Enter Phone Number * Optional", required: ''}
    ],
    [
      {elementName: 'textarea', type: "text", id: 'message', name: 'message', placeholder: "Enter Message *",  required: 'required'}
    ]
  ]
}

function ContactForm(props) {

    const success = 'Thanks for stopping by, I will be reaching out to you ASAP!'
    const fail = 'Sorry something went wrong, it\'s not you, you can try submiting again'
    let alert,
        disabled = false,
        buttonValue = 'Send Message';
    if (props.sent === 'sending') {
      buttonValue = 'Sending...'
      disabled = true
    }     
    
    if (props.sent === 'success') {
      alert = <div id="success" className="alert alert-primary text-center font-weight-bold">{success}</div>
      buttonValue = 'Message Sent'
      disabled = false
    } else if (props.sent === 'fail') {
      alert = <div id="success" className="alert alert-secondary text-center font-weight-bold">{fail}</div>
      buttonValue = 'Resend Message'
      disabled = false
    } 

const {onChangeEvent, onSubmitEvent} = props
  return (
    <form className="contact-form" id="contactForm" name="sentMessage" onSubmit={onSubmitEvent} noValidate={false}>
    {alert}
    <div className="row">
      {fields.sections.map((section, sectionIndex) => {
        return (
          <div className="col-md-6" key={sectionIndex}>
            <input type="hidden" name="contact_number" />
            {section.map((field, i) => {
              return <Field 
                        {...field} 
                        key={i}
                        value={props[field.id]}
                        onChange={onChangeEvent}
                        />
            })}
          </div>    
        )
      })}
      <div className="clearfix"></div>
      <div className="col-lg-12 text-center">
    <button id="sendMessageButton" className="btn btn-success btn-xl text-uppercase" disabled={disabled} type="submit">{buttonValue}</button>
      </div>
    </div>
  </form>
  )
}

export default ContactForm
