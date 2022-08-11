import filtersReducer from "../components/Filters/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";
import {combineReducers} from "redux";

/*const rootReducer=(state={},action)=> {
    // chia thành các reducer nhỏ Slice dể dễ quản lý
    return {
        filters:filtersReducer(state.filters, action),
        todoList:todoListReducer(state.todoList, action)
    }
}*/
const rootReducer=combineReducers({
        filters:filtersReducer,
        todoList:todoListReducer,
    }
)
export  default  rootReducer