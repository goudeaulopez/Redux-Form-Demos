import React from 'react'
import SimpleForm2 from './simpleform2'
import _ from 'lodash'

class Update extends React.Component{
 render(){
    return(
        <div>
          <SimpleForm2 
            title="Update Record" 
            button="Update" 
            initialValues={_.pick(this.props.update,'phone','email','appointment','agreement','id')}
            option = {this.props.option}
            onUpdate={this.props.onUpdate}
          />
        </div>
       )
    }
}
export default Update