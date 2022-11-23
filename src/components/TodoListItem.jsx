import React, { useContext } from 'react'
import MyContext from '../context/MyContext'

import { FiEdit, FiTrash2 } from 'react-icons/fi'

const TodoListItem = ({content,classs}) => {

    const { handleDeleteItem, handleEditItem,handleComplet, AllTodos} = useContext(MyContext)


  return (
    <li className={content.isCompleted ? `list-group list-group-flush bg-success bg-opacity-25 ${classs}` : `list-group list-group-flush  ${classs}`}>

        <div className="row justify-content-center  p-3">
            <div className="col-sm-10 ">
                <div className="row">
                    <div className="col-sm-10 ">
                        <div className="content form-check">
                            <input  className="form-check-input shadow-none" type="checkbox" id={content.id} onClick={(e)=>handleComplet(e,content)} />
                            <label htmlFor={content.id} >{content.text}</label>
                        </div>
                    </div>
                    <div className="col-sm-2 d-flex">
                        <div className="edit-btn col-sm text-success">
                            <FiEdit onClick={()=>handleEditItem(content)}/>
                        </div>
                        <div className="delete-btn col-sm text-danger">
                            <FiTrash2 onClick={()=>handleDeleteItem(content)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default TodoListItem