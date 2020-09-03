import React, { useReducer } from 'react';
import uuid from 'uuid';
import InvoiceContext from './invoiceContext'
import invoiceReducer from './invoiceReducer'
import {
        SET_CURRENT,
          CLEAR_CURRENT,
          CLEAR_FILTER, 
          GET_INVOICES,
          ADD_INVOICE,
          DELETE_INVOICE,
          UPDATE_INVOICE,
          INVOICE_ERROR,
          FILTER_INVOICES,
          CLEAR_INVOICES  
} from '../types';

const InvoiceState = props => {
  const initialState = {
    invoices: [
              {
                id: 1,
                name: 'Ushahemba Shir',
                paidFor: 'One month Subscription',
                amount: '3000'
                
              },
              {
                id: 2,
                name: 'Portia Osabade',
                paidFor: 'Daily Subscription',
                amount: '500'
                
              },
              {
                id: 3,
                name: 'Ole Gunner Soldjaer',
                paidFor: 'Hall renting',
                amount: '40000'
              
              }
            ]
          };

  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <InvoiceContext.Provider
      value={{
        invoices: state.invoices
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;

