import React from 'react';
import Field from "./BookingFields";

const fields = {
  sections: [
    [
      {elementName: 'input', type: "text", id: 'name', name: 'user_name', placeholder: "Enter Name *", required: 'required'},
      {elementName: 'input', type: "email", id: 'email', name: 'user_email', placeholder: "Enter Email *", required: 'required'},
      {elementName: 'input', type: "text", id: 'phone', name: 'user_phone', placeholder: "Enter Phone Number * Optional", required: ''},
      {elementName: 'input', type: "text", id: 'organisation', name: 'user_organisation', placeholder: "Enter  Organisation* Optional", },
      {elementName: 'input', type: "text", id: 'event', name: 'user_event', placeholder: "Enter the type of event *", required: ''},
      {elementName: 'input', type: "date", id: 'date', name: 'user_date', placeholder: "Enter event date ", required: 'required'}
    ],
    [
      {elementName: 'textarea', type: "text", id: 'about', name: 'about', placeholder: "Tell us more about the event. * Note our hall capacity is 45 persons *",  required: 'required'}
    ]
  ]
}

function ContactForm(props) {

    const success = 'Thanks for sending a booking request, We will get bact to you as via your mail!'
    const fail = 'Sorry something went wrong, it\'s not you, you can try submiting again'
    let alert,
        disabled = false,
        buttonValue = 'Send Info';
    if (props.sent === 'sending') {
      buttonValue = 'Sending...'
      disabled = true
    }     
    
    if (props.sent === 'success') {
      alert = <div id="success" className="alert alert-primary text-center font-weight-bold">{success}</div>
      buttonValue = 'info Sent succesfully'
      disabled = false
    } else if (props.sent === 'fail') {
      alert = <div id="success" className="alert alert-secondary text-center font-weight-bold">{fail}</div>
      buttonValue = 'Resend Info'
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
