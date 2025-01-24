import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todoFamily } from '../store/atoms/todosAtomFamily';
import { use } from 'react';

const TodosFamily = () => {

    const setTodo = useSetRecoilState(todoFamily(2));

    useEffect(() => {
        setTimeout(() => {
                    setTodo({todo : 'todo' , desc : 'desc' , state : false , id : 2 })

        },5000)
    },[])


  return (
    <>  
      <div>TodosFamily</div>

       

      <Todo id={1} />

      <Todo id={2} />
      <Todo id={2} />


    </>

 
  )
}

const Todo = ({id}) => {
    
    const todo = useRecoilValue(todoFamily(id));
    return (
        <div key={id}>{todo.desc} {todo.state}</div>
    )
}

export default TodosFamily


