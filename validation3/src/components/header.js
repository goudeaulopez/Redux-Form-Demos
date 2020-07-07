import React from 'react'

const Header = props =>{
    return(
        <div className="ui pointing secondary menu">
             <h3 className="item" onClick={()=>props.onOption('')} >Validation 3</h3>
            
            <div className="right menu" >
                <button className="ui mini button primary mt-2 mb-2 mr-4" onClick={()=>props.onOption('create')}>Create</button>
            </div>
        </div>
    )
}
export default Header
