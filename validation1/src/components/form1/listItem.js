import React from 'react'
import '../../styles/listItem.css'

const ListItem = props =>{
    return(
        <div className="listItem" onClick={()=>props.onSelected(props.item,'details')}>
             <div className="text-primary" id="p">{props.item.firstname}</div>
             <div className="text-primary" id="p">{props.item.lastname}</div>
             <div className="text-primary" id="p">{props.item.email}</div>
        </div>
    )
}
export default ListItem
//ui segment