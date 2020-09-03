import React, {useState, useContext, useEffect} from 'react'
import InvoiceContext from '../../../ContextAPIs/invoice/invoiceContext'

const InvoiceForm = () => {
  const invoiceContext = useContext(InvoiceContext)

  const {addInvoice, updateInvoice, current, clearCurrent} = invoiceContext

  const initialState = {
    name: '',
    paidFor: '',
    amount: ''
  }

  useEffect(() => {
    if (current !== null) {
      setInvoice(current)
    } else {
      setInvoice(initialState)
    }
    // eslint-disable-next-line
  }, [invoiceContext, current])

  const [invoice, setInvoice] = useState(initialState)

  const { name, paidFor, amount} = invoice

  const onChange = e =>
    setInvoice({...invoice, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    if (current === null) {
      addInvoice(invoice)
    } else {
      updateInvoice(invoice)
    }
    clearAll()
  }

  const clearAll = () => {
    clearCurrent()
  }

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Invoice' : 'Make Payment here'}
      </h2>
     <p><input type='text' name='name' placeholder='Name' value={name} onChange={onChange} /> </p>
     <p><input type='text' name='paidFor' placeholder='Select payment' value={paidFor} onChange={onChange} /> </p>
     <p><input type='text' name='amount' placeholder='Amount' value={amount} onChange={onChange} /> </p>
      
      <div>
        <input type='submit'  value={current ? 'Update Invoice' : 'Pay'} className='btn btn-primary' />
      </div>
      {current && (
        <div> <button className='btn btn-light btn-block' onClick={clearAll}>  Clear  </button>  </div>
      )}
    </form>
  )
}

export default InvoiceForm
