export const  addToDo=(data)=> {
    //console.log(data)
    return {
        type:'todoList/addToDo',
            payload: data
    }
}
export const  toggleToDoStatus=(todoId)=> {

    return {
        type:'todoList/toggleToDoStatus',
        payload:todoId

    }
}
export  const searchFilterChange=(text)=>{

    return {
        type:'filter/searchFilterChange',
        payload:text
    }
}

export  const statusFilterChange=(status)=>{
    return {
        type:'filter/statusFilterChange',
        payload:status
    }
}
export  const prioritiesFilterChange=(priorities)=>{
    //console.log(priorities)
    return {
        type:'filter/prioritiesFilterChange',
        payload:priorities
    }
}