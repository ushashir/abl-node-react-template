import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import InvoiceContext from '../../../ContextAPIs/invoice/invoiceContext'

const InvoiceItem = ({ invoice }) => {
  const invoiceContext = useContext(InvoiceContext)

  const {id, name, amount, paidFor} = invoice

 
  return (
    <table className="table table-light">
            
            <tbody>
              <tr>
                <td>{name} </td>
                <td>{paidFor}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </table>
  )
}

InvoiceItem.propTypes = {
  invoice: PropTypes.object.isRequired
}

export default InvoiceItem;
