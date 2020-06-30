import React from 'react'
import ListItem from './listItem'
import '../../styles/list.css'

class List extends React.Component{
    renderList = () => {
        if(this.props.displayList.length === 0){
            return (<div style={{textAlign:'center',fontSize:'14px',paddingTop:'30px',color:'blue'}}>
                Please be the first in to add a record</div>)
        } 
       return  this.props.displayList.map(
            item => {
                return <ListItem key={item.email} item={item} onSelected={this.props.onSelected}/>
            }
        )
    }
    render(){
         return(
             <div className="list">
                 <p onClick={()=>this.props.onOption('create')}>
                     Add New Record
                </p>
                  {this.renderList()}
             </div>
         )
    }
}
export default List
