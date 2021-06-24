const initialState = {
  min: 1,
  max: 100,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "min_number_change":
      return {
        ...state,
        min: action.payload,
      };

    case "max_number_change":
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
