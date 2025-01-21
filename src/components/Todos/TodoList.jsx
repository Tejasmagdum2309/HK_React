import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { filterTodosSeletor, todoState } from '../../store/atoms/todo.jsx';
import TodoComponent from './TodoComponent.jsx';

const TodoList = () => {

    // const todos = useRecoilValue(todoState);
    // const [tp,settp] = useState('');
    const filterTodos = useRecoilValue(filterTodosSeletor);

    // const todos = useRecoilValue(filterTodosSeletor);
    // console.log("t _> ",todos)

    console.log('rendered-TodoLists');

  return (

    <div className="flex justify-center items-center  flex-col">
      <div>TodoList</div>
      {/* <input type="text" value={tp} onChange={(e) => {settp(e.target.value)}} /> */}

      {
        /* <div>TodoList</div> */
        filterTodos && filterTodos.length > 0 && filterTodos.map((todo) => {
            return (
              <TodoComponent todo={todo} key={todo.id} />
            )
          })
      }

    </div>
  )
}

export default TodoList