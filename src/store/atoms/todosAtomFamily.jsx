import { atomFamily, selector, selectorFamily } from "recoil";

export const todoFamily = atomFamily({
    key : 'todoFamily',
        default : (id) => {
            return Todos.find((todo) => todo.id === id)
        }
})

let Todos = [{todo :'market' , desc : 'going to by  saili a present' , state : false , id : 1 }, {todo :'Gym' , desc : 'Back workout' , state : false , id : 2 },]