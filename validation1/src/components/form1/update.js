import React from 'react'
import SimpleForm from './simpleform'
import _ from 'lodash'

class Update extends React.Component{
    render(){
    return(
        <div>
           <SimpleForm initialValues={_.pick(this.props.selected,'firstname','lastname','phone','email','description')}
                       onList={this.props.onList} create="Update" title="Update Record"
                       />
        </div>
    )
    }
}
export default Update