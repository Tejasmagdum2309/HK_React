import React from 'react'

const TodoComponent = ({todo,id}) => {
  console.log('rendered-TodoComponent Single');
  return (
    <div key={id} className='flex justify-start items-start'>
          <h3 className='px-3 text-blue-600' >{todo.todo}</h3>
          <p>{todo.desc}</p>
          <button className='btn bg-black text-white p-1 mx-3' >delete</button>
          <button className='btn bg-black text-white  p-1'>complete</button>

    </div>
  )
}

export default TodoComponent