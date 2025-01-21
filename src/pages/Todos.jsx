import React from "react";
import CreateTodo from "../components/Todos/CreateTodo";
import TodoList from "../components/Todos/TodoList";
import FilterTodos from "../components/Todos/FilterTodos";

const Todos = () => {

 
    console.log("Todos Page rendered");


  return ( <>
  
      {/* <div className="flex justify-center items-center  flex-col"> */}

        <CreateTodo />

        <FilterTodos/>

        <TodoList />

      {/* </div> */}
    

       
  </>);
};

export default Todos;
