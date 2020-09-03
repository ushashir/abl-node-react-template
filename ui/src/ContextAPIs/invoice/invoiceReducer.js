import {
          SET_CURRENT,
          CLEAR_CURRENT,
          CLEAR_FILTER, 
          GET_INVOICES,
          ADD_INVOICE,
          INVOICE_ERROR,
          FILTER_INVOICES,
          CLEAR_INVOICES
                          } from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_INVOICE:
      return {
        ...state,
        invoices: [action.payload, ...state.invoices],
        loading: false
      }

    case GET_INVOICES:
      return {
        ...state,
        invoices: action.payload,
        loading: false
      }

    case INVOICE_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case CLEAR_INVOICES:
      return {
        ...state,
        invoices: null,
        filtered: null,
        error: null,
        current: null
      }

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }

    case FILTER_INVOICES:
      return {
        ...state,
        filtered: state.invoices.filter(invoice => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return (
            invoice.date.match(regex) ||
            invoice.name.match(regex) ||
            invoice.amount.match(regex) ||
            invoice.paidFor.match(regex)
          )
        })
      }

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }

    default:
      return state
  }
}
