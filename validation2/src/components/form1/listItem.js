import React from 'react'
import '../../styles/listItem.css'

const ListItem = props =>{
    const agreement= props.item.agreement === true? 
    <i className="icon thumbs up green"></i>: <i className="icon thumbs down red"></i>
    return(
        <div>
            <div id="bigscreen" className="ui grid border-bottom primary">
                <div onClick={()=>props.onSelected(props.item,'details')} className="four column row"  id="uiGrid">
                    <div className="column center aligned text-primary pl-2 pt-2">{props.item.email}</div>
                    <div  className="column center aligned text-primary pt-2">{props.item.phone}</div>
                    <div  className=" column center aligned text-primary pt-2">{props.item.appointment}</div>
                    <div className="column center aligned pt-2">{agreement}</div>
                </div>
            </div>
            <div id="smallscreen" className="ui grid border-bottom primary">
                <div onClick={()=>props.onSelected(props.item,'details')} className="two column row"  id="uiGrid">
                    <div className="column right aligned text-primary pl-5">{props.item.email}</div>
                 
                    <div className=" column center aligned ">{agreement}</div>
                </div>
            </div>
        </div>
    ) 
}
export default ListItem

//column right aligned 
         
        