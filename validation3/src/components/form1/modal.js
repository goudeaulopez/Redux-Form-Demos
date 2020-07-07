import ReactDOM from 'react-dom'
import React from 'react'
import '../styles/modal.css'

const Modal = props =>{
    return  ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e)=> e.stopPropagation()} className="ui tiny modal visible active" id="modal1">
                <div className="header">{props.title}</div>
                <div className="content">{props.context}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}
export default Modal