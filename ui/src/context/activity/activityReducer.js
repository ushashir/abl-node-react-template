import {
          GET_ACTIVITIES,
          ADD_ACTIVITY,
          SET_CURRENT,
          CLEAR_CURRENT,
          UPDATE_ACTIVITY,
          DELETE_ACTIVITY,
          FILTER_ACTIVITIES,
          CLEAR_FILTER,
          ACTIVITY_ERROR,
          CLEAR_ACTIVITIES
                          } from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [action.payload, ...state.activities],
        loading: false
      }

    case UPDATE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(activity =>
          activity._id === action.payload._id ? action.payload : activity
        ),
        loading: false
      }

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
        loading: false
      }

    case ACTIVITY_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          activity => activity._id !== action.payload
        ),
        loading: false
      }

    case CLEAR_ACTIVITIES:
      return {
        ...state,
        activities: null,
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

    case FILTER_ACTIVITIES:
      return {
        ...state,
        filtered: state.books.filter(activity => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return (
            activity.date.match(regex) ||
            activity.type.match(regex)
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
