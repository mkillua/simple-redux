import { combineReducers, createStore } from "redux";
import { ChangeNumber } from "./actions/number";
import reducenumbers from "./reducers/Numbers"
import userReducer from "./reducers/User"

const reducers = combineReducers({
  numbers:reducenumbers,
  user: userReducer
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
