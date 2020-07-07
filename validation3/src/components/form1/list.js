import React from 'react'
import ListItem from './listItem'

class List extends React.Component{
    renderList = () =>{
      if(this.props.displayList.length === 0){
          return <div style={{textAlign:'center',paddingTop:'10%'}}>no data</div>
      }
      return this.props.displayList.map(
          item =>{
              return <ListItem key={item.id} item={item} onSelected={this.props.onSelected}/>
          }
      )
    }
    
     render(){
     return<div>{this.renderList()}</div>
    }
}
export default List
