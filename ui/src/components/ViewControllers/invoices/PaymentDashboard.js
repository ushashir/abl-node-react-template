import React, {useContext, useEffect} from 'react'
import Invoices from '../invoices/Invoices'
import InvoiceForm from '../invoices/InvoiceForm'
import InvoiceFilter from '../invoices/InvoiceFilter'
import AuthContext from '../../../ContextAPIs/auth/authContext'
import InvoiceContext from '../../../ContextAPIs/invoice/invoiceContext'
import LoginNav from '../../AuthNav'

const UserDashboard = () => {
  const {loadUser} = useContext(AuthContext)
  const {invoices} = useContext(InvoiceContext)

  useEffect(() => {
    loadUser()
    // eslint-disable-next-line
  }, [])

  return (
    <section className='page-section'>
    <div className='container'>
      <div style={{float: 'right'}} >
      <LoginNav />
      </div>
          <InvoiceForm /> <br />
              Recent Transactions
          {invoices !== null && <InvoiceFilter />}
          <table className="table table-light">
            <thead>
              <tr>
                <th scope="col">NAME</th>
                <th scope="col">PAID FOR</th>
                <th scope="col">AMOUNT (N)</th>
              </tr>
            </thead>
          </table>
          <Invoices />
    </div>
    </section>
  )
}

export default UserDashboard;
