import React from 'react'
import Modal from './modal'

class Delete extends React.Component{
   renderContext(){
       if(!this.props.delete){
        return 'Are you sure you want to delete this record'
      }
      return `Are you sure you want to delete this record ${this.props.delete.firstname}`
   }
   renderActions=()=>{
    return (
      <React.Fragment>
          <button className="ui button negative" onClick={()=>{this.props.onDelete(this.props.delete)}} >Delete</button>
          <button className="ui button" onClick={()=>this.props.onOption('details') } >Cancel</button>
      </React.Fragment>
  )
  }
   render(){
        return (
                <div>
                    <Modal 
                        onDismiss={()=>{this.props.onOption('details')}}
                        title="Delete Record"
                        context={this.renderContext()}
                        actions={this.renderActions()}
                    
                    />
                </div>
        )
    }
}
export default Delete