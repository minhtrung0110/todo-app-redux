const initState=[
        {id:1,name:'Learn ReactJs Hooks',completed:true,prioriry:'High'},
        {id:2,name:'Learn Redux-Saga-Toolkit',completed:false,prioriry:'Medium'},
    ]

const todoListReducer=(state=initState,action)=>{
    switch(action.type) {
        case 'todoList/addToDo':
            return [...state, action.payload,]

        default:
            return state
    }
}

export  default  todoListReducer