import React, { useContext } from "react";
import TodoListItem from './TodoListItem'
import MyContext from "../context/MyContext";

const TodoList = () => {
  const {AllTodos}  = useContext(MyContext);


  return (
      <ul className="list-group list-group-flush">
        {
            AllTodos.map((todo)=>{
           
                if(todo['hide'] == null){
                  return <TodoListItem classs="" key={todo.id} content={todo} />
                }else if(todo.hide === true){
                  return <TodoListItem classs="d-none" key={todo.id} content={todo} />
                }else{
                  return <TodoListItem classs="" key={todo.id} content={todo} />
                }
            })
        }
      </ul>
  );
};

export default TodoList;
