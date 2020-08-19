import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import InvoiceContext from '../../context/invoice/invoiceContext'

const InvoiceItem = ({ invoice }) => {
  const invoiceContext = useContext(InvoiceContext)
  const {deleteInvoice, setCurrent, clearCurrent} = invoiceContext

  const {_id, name, amount, paidFor} = invoice

  const onDelete = () => {
    deleteInvoice(_id)
    clearCurrent()
  }

  return (
    <div className='card bg-light'>
      <h6 className='text-primary text-left'> {name} {' '}</h6>
      
        <h4 className='text-primary text-left'>
          Amount N{amount}{' '}
        
        </h4>
            <p><i>Paid For:</i> {paidFor}{''} </p>
      <p>
        <button className='btn btn-dark btn-sm' onClick={() => setCurrent(invoice)}> Edit </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}> Delete </button>
      </p>
    </div>
  )
}

InvoiceItem.propTypes = {
  invoice: PropTypes.object.isRequired
}

export default InvoiceItem;
