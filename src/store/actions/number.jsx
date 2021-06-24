

export const ChangeMinNumber = (min_value) => {
  return {
    type: 'min_number_change',
    payload: min_value
  }
}

export const ChangeMaxNumber = (min_value) => {
  return {
    type: 'max_number_change',
    payload: min_value
  }
}