const initState=[
        {id:1,name:'Learn ReactJs Hooks',completed:true,priority:'High'},
        {id:2,name:'Learn Redux-Saga-Toolkit',completed:false,priority:'Medium'},
    ]

const todoListReducer=(state=initState,action)=>{
    switch(action.type) {
        case 'todoList/addToDo':
            return [...state, action.payload,]
        case 'todoList/toggleToDoStatus':
            return state.map((todo)=> { console.log(todo.id,'--',action.payload)
                  return   (todo.id === action.payload) ? {...todo, completed: !todo.completed} : todo
                }
            )
        default:
            return state
    }
}

export  default  todoListReducer