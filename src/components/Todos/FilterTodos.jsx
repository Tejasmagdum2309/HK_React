import React from 'react'
import { filterTodoState } from '../../store/atoms/todo.jsx';
import { useSetRecoilState } from 'recoil';

const FilterTodos = () => {
const setFilterTodos = useSetRecoilState(filterTodoState);

  return (
    <div className='flex justify-center items-center'>
        FilterTodos : <input type="text" className='border md:border-2 border-gray-400 w-1/2' onChange={(e) => {setFilterTodos(e.target.value)}}   />
    </div>
  )
}

export default FilterTodos