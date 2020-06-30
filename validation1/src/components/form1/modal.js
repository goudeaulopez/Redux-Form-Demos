import ReactDOM from 'react-dom'
import React from 'react'
import '../../styles/modal.css'

const Modal = props =>{
    return ReactDOM.createPortal(
        <div>
           <div className="answer">
                <h2 className="text text-primary pl-3">Delete</h2>
                <h3 className="text text-primary text-center">Are you sure you want to delete</h3>
                <div className="link">
                     <button onClick={()=>props.onDelete(props.selected,'')} className="btn btn-danger ml-5">delete</button>
                     <button onClick={()=>props.onSelected(props.selected,'details')} className="btn btn-primary ml-1">cancel</button>
                </div>
           </div>
       </div>,
        document.querySelector('#modal')
    )
}
export default Modal