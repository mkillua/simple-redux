import {
  MINIMUM_VALUE_CHANGED,
  MAXIMUM_VALUE_CHANGED
} from '../constants/actions'

export const ChangeMinNumber = (min_value) => {
  return {
    type: MINIMUM_VALUE_CHANGED,
    payload: min_value
  }
}

export const ChangeMaxNumber = (min_value) => {
  return {
    type: MAXIMUM_VALUE_CHANGED,
    payload: min_value
  }
}