import { createStore } from "redux";
import counterReducer from "./services/Reducer/reducerCounter";

const store = createStore(counterReducer);
export default store;
