import { createStore } from "redux";
import Reducers from "./Reducers";
const store = createStore(Reducers);
store.subscribe(() => {
  // console.log(store.getState());
});
export default store;
