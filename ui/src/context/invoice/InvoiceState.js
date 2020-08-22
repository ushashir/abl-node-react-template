import React, {useReducer} from 'react'
import axios from 'axios'
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
                         } from '../types'
import setAuthToken from '../../utils/setAuthToken'

const InvoiceState = props => {
  const initialState = {
    invoices: null,
    current: null,
    filtered: null,
    error: null
  }

  const [state, dispatch] = useReducer(invoiceReducer, initialState)

  // add invoice
  const addInvoice = async invoice => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post('/api/invoices', invoice, config)

      dispatch({type: ADD_INVOICE, payload: res.data})
    } catch (err) {
      dispatch({type: INVOICE_ERROR, payload: err.response.data})
    }
  }
  

  // update invoice
  const updateInvoice = async invoice => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.put(
        `/api/invoices/${invoice._id}`,
        invoice,
        config
      )

      dispatch({type: UPDATE_INVOICE, payload: res.data})
    } catch (err) {
      dispatch({type: INVOICE_ERROR, payload: err.response.data})
    }
  }

  // get invoices
  const getInvoices = async invoice => {
    if (localStorage.token) {
      setAuthToken(localStorage.token)
    }

    try {
      const res = await axios.get('/api/invoices')

      dispatch({type: GET_INVOICES, payload: res.data})
    } catch (err) {
      dispatch({type: INVOICE_ERROR, payload: err.response.data})
    }
  }

  // delete invoice
  const deleteInvoice = async id => {
    try {
      await axios.delete(`/api/invoices/${id}`)

      dispatch({type: DELETE_INVOICE, payload: id})
    } catch (err) {
      dispatch({type: INVOICE_ERROR, payload: err.response.data})
    }
  }

  // clear invoices
  const clearInvoices = () => {
    dispatch({type: CLEAR_INVOICES})
  }

  // set current invoice
  const setCurrent = invoice => {
    dispatch({type: SET_CURRENT, payload: invoice})
  }

  // clear current invoice
  const clearCurrent = () => {
    dispatch({type: CLEAR_CURRENT})
  }

  // filter invoices
  const filterInvoices = text => {
    dispatch({type: FILTER_INVOICES, payload: text})
  }

  // clear Filter
  const clearFilter = () => {
    dispatch({type: CLEAR_FILTER})
  }

  return (
    <InvoiceContext.Provider
      value={{
                invoices: state.invoices,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                getInvoices,
                addInvoice,
                updateInvoice,
                deleteInvoice,
                filterInvoices,
                clearFilter,
                clearInvoices,
                setCurrent,
                clearCurrent
                            }}>
      {props.children}
    </InvoiceContext.Provider>
  )
}

export default InvoiceState
