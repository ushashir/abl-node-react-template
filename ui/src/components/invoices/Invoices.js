import React, {Fragment, useContext, useEffect} from 'react'
import InvoiceItem from './InvoiceItem'
import InvoiceContext from '../../context/invoice/invoiceContext'
// import Spinner from '../layouts/Spinner'

const Invoice = () => {
  const invoiceContext = useContext(InvoiceContext)

  const {invoices, filtered, getInvoices, loading} = invoiceContext

  useEffect(() => {
    getInvoices()
    // eslint-disable-next-line
  }, [])

  if (invoices !== null && invoices.length === 0 && !loading) {
    return <h4>Make your payment below</h4>
  }

  return (
    <Fragment>
      {invoices !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(invoice => (
                <CSSTransition key={invoice._id} timeout={500} className='item'>
                  <InvoiceItem invoice={invoice} />
                </CSSTransition>
              ))
            : invoices.map(invoice => (
                <CSSTransition key={invoice._id} timeout={500} className='item'>
                  <InvoiceItem invoice={invoice} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Invoice
