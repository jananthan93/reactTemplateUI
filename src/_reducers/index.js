import { combineReducers } from "redux";
import defectStatusReducer from "./defect-status-reducer";
import testReducer from './test-reducer'
export default combineReducers({
    defectStatusStore: defectStatusReducer,
    testStore:testReducer
  });