import React from 'react'
import FormMain from './formMain'
//import _ from 'lodash'

class Update extends React.Component{
   render(){
     return(
        <div>
        <FormMain 
            onUpdate={this.props.onUpdate} 
            option={this.props.option} 
            update = {this.props.update}
           
        />
    </div>
     )
    }
}
export default Update