
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Select from "./components/Select";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import MyContext from "./context/MyContext";

import { useState, useEffect } from "react";
import uniqid from 'uniqid';





function App() {
  const [toggle, setToggle] = useState(false)

  const handleToggleTodo = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  const [text,setText] = useState('')
  const handleChangeinput =  (e) => {
    setText(e.target.value)
    
  }

  const [send, setSend] = useState([])
  const [a , setA ] = useState([])

  const handleAddTodo = () => {
    const addedTodo = {
      id: uniqid(), text:text,isCompleted:false
    }
    const newTodo = [addedTodo,...send]
    setSend(newTodo)
    setA(newTodo)
    setText('')
    setToggle(!toggle)
    
  } 

  const handleDeleteItem = (item) => {
    let newTodoList = send.filter((todos) => { return item.id !== todos.id})
    console.log(newTodoList)
    setSend(newTodoList)
    // let deletedItem = send.filter((todos) => { return item.id === todos.id})
    setA(newTodoList)
    console.log(a)

  }

  const handleClose = () => {
    setToggle(!toggle)
    setText("")

  }

  const handleEditItem = (item) => {
    setText(item.text)
    let newTodoList = send.filter((todos) => { return item.id !== todos.id})
    setSend(newTodoList)
    setToggle(!toggle)


  }
  const [toggleComplet,setToggleComplet] = useState(false)
  const handleComplet = (e,item) => {
    if(e.target.checked){
     
      item.isCompleted =  true
      setToggleComplet(true)
    }else{
      item.isCompleted =  false
      setToggleComplet(false)


    }
  }


  
  const handleChangeSelect = (e) => {
    
     if(e.target.value === "completed"){
      const completed = a.filter(Task =>  Task.isCompleted === true)
      setSend(completed)
    }
    else if(e.target.value === "incompleted"){
      const incompleted = a.filter(Task =>  Task.isCompleted !== true)
      setSend(incompleted)
    }else if(e.target.value === "all"){
   
      setSend(a)
    }
    
  }






  return (
    <MyContext.Provider value={{send, toggle ,handleChangeinput, handleAddTodo, handleChangeSelect , handleComplet, toggleComplet, text, handleEditItem, setToggle, handleClose, handleDeleteItem}}>
      <div className='container-fluid  '>
        <div className="container">
          <Header />
          <div className="row">
            <div className="col-sm-4  mb-3">
              <Buttons type="button" text="Add a Todo" format="primery"  onClickbtn={handleToggleTodo} />
            </div>
            <div className="col-sm-4  offset-sm-4 mb-3 ">
                <Select />
            </div>
          </div>
          <div className="row">
            <TodoList />
          </div>
        </div>
        <AddTodo />
        
      </div>
    </MyContext.Provider>
  );
}

export default App;
