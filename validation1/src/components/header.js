import React from 'react'

const Header = props =>{
    return(
    <div className="navbar navbar-expand-lg navbar-light bg-light">
       <p className="navbar-brand h1 text-primary pl-3  pt-2"  onClick={()=>props.onOption('')}>Validation1</p>
    </div>
    )
}
export default Header
