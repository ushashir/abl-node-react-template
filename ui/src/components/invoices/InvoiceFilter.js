import React, {useContext, useRef, useEffect} from 'react'
import InvoiceContext from '../../context/invoice/invoiceContext'

const InvoiceFilter = () => {
  const invoiceContext = useContext(InvoiceContext)
  const text = useRef('')

  const {filterInvoices, clearFilter, filtered} = invoiceContext

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const onChange = e => {
    if (text.current.value !== '') {
      filterInvoices(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Invoices...'
        onChange={onChange}
      />
    </form>
  )
}

export default InvoiceFilter
