export const  addToDo=(data)=> {
    //console.log(data)
    return {
        type:'todoList/addToDo',
            payload: data
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
export  const prioriryFilterChange=(prioriry)=>{
    return {
        type:'filter/prioriryFilterChange',
        payload:prioriry
    }
}