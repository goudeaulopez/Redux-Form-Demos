import React from 'react'
import SimpleForm from './simpleform'


class Create extends React.Component{
     render(){
        return(
            <div>
                <SimpleForm onList={this.props.onList} create="Create" title="Create Record" />
            </div>
        )
    }
}
export default Create