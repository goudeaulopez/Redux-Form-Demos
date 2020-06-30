import ReactDOM from 'react-dom'
import React from 'react'
import '../styles/modal.css'

const Modal = props =>{
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss}  className="ui dimmer modals visible active">
         
           <div onClick={(e)=>e.stopPropagation()} className="ui tiny modal visible active " id="modal1">
                <div className="header text-primary">{props.title}</div>
                <div className="content text-primary">{props.context}</div>
                <div className="actions text-primary">{props.actions}</div>
           </div>
        
       </div>,
        document.querySelector('#modal')
    )
}
export default Modal