import React, {useContext, useEffect} from 'react'
import Invoices from '../../components/invoices/Invoices'
import InvoiceForm from '../../components/invoices/InvoiceForm'
import InvoiceFilter from '../../components/invoices/InvoiceFilter'
import AuthContext from '../../context/auth/authContext'
import InvoiceContext from '../../context/invoice/invoiceContext'

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
