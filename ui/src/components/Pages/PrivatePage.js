import React, {useContext, useEffect} from 'react'
import Invoices from '../ViewControllers/invoices/Invoices'
import InvoiceForm from '../ViewControllers/invoices/InvoiceForm'
import InvoiceFilter from '../ViewControllers/invoices/InvoiceFilter'
import AuthContext from '../../ContextAPIs/auth/authContext'
import InvoiceContext from '../../ContextAPIs/invoice/invoiceContext'

const PrivatePage = () => {
  const {loadUser} = useContext(AuthContext)
  const {invoices} = useContext(InvoiceContext)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='grid-2'>
      <div className=''>
        <InvoiceForm />
      </div>
      <div className=''>
        {invoices !== null && <InvoiceFilter />}
        <Invoices />
      </div>
    </div>
  )
}

export default PrivatePage
