import {atom, selector} from 'recoil';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid function


export const todoState = atom({
    key : "todoState",
    default : [{todo :'market' , desc : 'going to by  saili a present' , state : false , id : uuidv4() }, {todo :'Gym' , desc : 'Back workout' , state : false , id : uuidv4() },]
})

export const filterTodoState = atom({
    key : "filterTodoState",
    default : ''
})

export const filterTodosSeletor = selector({
    key : 'filterTodosSeletor',
    get : ({get}) => {
        const todos = get(todoState);
        const filterTodos = get(filterTodoState);
        return todos.filter((todo) => todo.todo.toLowerCase().includes(filterTodos.toLowerCase()) || todo.desc.toLowerCase().includes(filterTodos.toLowerCase()));
    }
})