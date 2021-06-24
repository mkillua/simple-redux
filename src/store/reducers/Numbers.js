import {
  MINIMUM_VALUE_CHANGED,
  MAXIMUM_VALUE_CHANGED
} from '../constants/actions'

const initialState = {
  min: 1,
  max: 100,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MINIMUM_VALUE_CHANGED:
      return {
        ...state,
        min: action.payload,
      };

    case MAXIMUM_VALUE_CHANGED:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
