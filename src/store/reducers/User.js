
const initialState =  {
  name: "Mauricio",
  email: "mauricio.reborn@hotmail.com",
  profile: "Admin",
};

export default function (state = initialState, action) {

  switch (action.type) {
    case "change_user_name":
      return {
        ...state,
        name: action.payload,
      };

    case "change_user_email":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state
  }
}
