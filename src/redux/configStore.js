import { createStore, combineReducers } from "redux";
import Bucket from "./modules/bucket"

const rootReducer = combineReducers({Bucket});
//나중에 리듀서가 여러개면 { 안에 , 써서 여러개 넣어주면 된다}

const store = createStore(rootReducer);
//스토어를 만들어준다 원래 추가옵션도 있지만 우린 없으니까 바로 스토어 만들어주기

export default store;