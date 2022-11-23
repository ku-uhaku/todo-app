import MyContext from '../context/MyContext'
import React, {useContext} from 'react'

const Select = () => {
  const {  handleChangeSelect } = useContext(MyContext)

  return (
    <select className="form-select shadow-none border-dark px-2" onChange={(e)=> handleChangeSelect(e)} > 
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
    </select>
  )
}

export default Select