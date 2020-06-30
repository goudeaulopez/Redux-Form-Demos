import React from 'react'
import '../styles/header.css'

const Header = props =>{
    return(
    <div className="navbar navbar-light bg-light" >
       <h2 className="text text-primary pl-2 pt-2" onClick={()=>props.onOption('')}>Validation2</h2>
       <button className="btn btn-primary ml-3" onClick={()=>props.onOption('create')}>create record</button>
    </div>
    )
}
export default Header
 