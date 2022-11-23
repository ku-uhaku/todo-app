import { useContext } from "react"



const Buttons = ({type, text, format, onClickbtn}) => {
  return (
    <button  
      className={format=== "primery" ? "btn btn-primary" : "btn btn-danger"} 
      type={type}
      onClick={onClickbtn}
    >{text}</button>
  )
}

export default Buttons