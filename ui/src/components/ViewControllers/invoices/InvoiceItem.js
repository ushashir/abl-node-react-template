import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import InvoiceContext from '../../../ContextAPIs/invoice/invoiceContext'

const InvoiceItem = ({ invoice }) => {
  const invoiceContext = useContext(InvoiceContext)
  const {deleteInvoice, setCurrent, clearCurrent} = invoiceContext

  const {_id, name, amount, paidFor} = invoice

  const onDelete = () => {
    deleteInvoice(_id)
    clearCurrent()
  }

  return (
      <table className="table table-light">
              
              <tbody>
                <tr>
                  <td>{name} </td>
                  <td>{paidFor}</td>
                  <td>{amount}</td>
                  <td>
                     <button className='btn btn-dark btn-sm' onClick={() => setCurrent(invoice)}> Edit </button>
                     <button className='btn btn-danger btn-sm' onClick={onDelete}> Delete </button>
                  </td>
                </tr>
                
              </tbody>
            
        
      
 
            </table>
  
      
  )
}

InvoiceItem.propTypes = {
  invoice: PropTypes.object.isRequired
}

export default InvoiceItem;
