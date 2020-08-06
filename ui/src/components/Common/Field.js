import React from 'react'

function Field(props) {
  return (
    <div className="form-group">
      {props.elementName === 'input' ?
         <input 
            className="form-control" 
            id={props.id}
            type={props.type}
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder}
            required = {props.required}
         />
        :
          <textarea 
            className="form-control" 
            id={props.name}
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder}
            required = {props.required}
          />  
      }
    <p className="help-block text-danger"></p>
  </div>
  )
}

export default Field
