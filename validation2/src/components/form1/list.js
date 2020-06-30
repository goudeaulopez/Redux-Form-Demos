import React from 'react'
import ListItem from './listItem'
import '../../styles/list.css'

class List extends React.Component{
renderList= () =>{
     if(this.props.list.length === 0){
       return(<div style={{textAlign:'center', paddingTop:'20%'}} className="text text-primary" >
         Please be the first one</div>)
     }
    
      return this.props.list.map(
            item => {
              return <ListItem item={item} key={item.id} onSelected={this.props.onSelected}/>
          }
        )
  }
  renderTitle(){
     if(this.props.list.length>0){
       return(
        <div className="ui grid">
          <div id="gigscreen" className="four column row">
            <div className="grey column center aligned text-white">email</div>
            <div  className="grey column center aligned text-white">phone</div>
            <div  className="grey column center aligned text-white">calling time</div>
            <div className="grey column center aligned text-white">happy</div>
          </div>
          <div id="smallcreen"  className="two column row">
            <div className="grey column center aligned text-white">email</div>
            <div className="grey column center aligned text-white">happy</div>
          </div>
        </div>
       )
     }
  }
render(){
         return(
            <div className="list">
               {this.renderTitle()}
               {this.renderList()}
           </div>
          )
    }
}
export default List
