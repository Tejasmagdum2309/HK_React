import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid function
import { todoState } from '../../store/atoms/todo';



const CreateTodo = () => {

    const [todo,setTodo] = useState('');
    const [desc ,seDesc] = useState('');

    const setTodos =  useSetRecoilState(todoState);


    const addTodo = () => { 
        const newTodo = {todo : todo , desc : desc , state : false , id : uuidv4() }
        setTodos(pre => [...pre,newTodo]);
        setTodo('');
        seDesc('');
    }

    console.log('rendered-createTodo');
  return (
    <div className="flex justify-center items-center  flex-col">
      <input type="text" placeholder="Enter todo" className="border md:border-2 border-gray-400 w-1/2" value={todo} onChange={(e) => {setTodo(e.target.value)}} ></input>
      <input type="text" placeholder="Enter Description" className="border md:border-2 border-gray-400 w-1/2" value={desc} onChange={(e) => {seDesc(e.target.value)}}></input>

      <button className="btn bg-black text-white border-2 rounded-sm p-3" onClick={() => {addTodo()}}>save</button>

      </div>
  )
}

export default CreateTodo