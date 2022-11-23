
import React, { useContext, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Buttons from './Buttons'
import MyContext from '../context/MyContext'

const AddTodo = () => {
    
    const { toggle, handleChangeinput, handleAddTodo, text ,handleClose  } = useContext(MyContext)
  return (
    <div className={ toggle === false ?  "d-block w-100 h-100 bg-dark text-white": "d-none"}>
        <div className="d-flex justify-content-center align-items-center border">
            <div className="my-3  w-50">
                <div className="card-header d-flex justify-content-end">
                    <AiOutlineClose onClick={handleClose} />
                </div>
                <div className="row ">
                    <form className='form' onClick={(e=>e.preventDefault())}>
                        <div className="form-group  mb-3">
                            <label htmlFor="">Add Todo</label>
                            <input 
                                type="text" 
                                className="form-control shadow-none" 
                                placeholder='OKEY : )'
                                onChange={handleChangeinput}
                                value={text}
                            />
                        
                        </div>
                        <div className="card-footer mb-3">
                            <div className="row">
                                <div className="col-sm-3">
                                    <Buttons type="submit" text="Add a Todo" format="primery" onClickbtn={handleAddTodo}/>
                                </div>
                                <div className="col-sm-2 ">
                                    <Buttons type="button" text="Cancel" format="secondary" onClickbtn={handleClose} />
                                </div>
                            </div>
                        </div>
            
                    </form>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddTodo