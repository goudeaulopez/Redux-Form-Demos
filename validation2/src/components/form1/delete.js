import React from 'react'
import Modal from '../modal'
class Delete extends React.Component{
  renderContent(){
    if(!this.props.delete){
      return 'Are you sure you want to delete this record'
    }
    return `Are you sure you want to delete this record ${this.props.delete.email}`
  }
  renderActions(){
    return (
      <React.Fragment>
          <button onClick={()=>{
              this.props.onDelete(this.props.delete)
          }}  className="ui button negative">Delete</button>
          <button onClick={()=>this.props.onOption('details') }  className="ui button">Cancel</button>
      </React.Fragment>
  )
  }
  render(){
        return <Modal
                  title="Delete Record"
                  context={this.renderContent()}
                  actions={this.renderActions()}
                  onDismiss={()=>this.props.onOption('details')}
                />
    }
}
export default Delete