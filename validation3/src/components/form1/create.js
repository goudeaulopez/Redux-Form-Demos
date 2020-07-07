import React from 'react'
import FormMain from './formMain'
import {reduxForm} from 'redux-form'

class Create extends React.Component{
    
    render(){
        return(
            <div>
                <FormMain onCreate={this.props.onCreate} option={this.props.option} />
            </div>
        )
    }
}
export default reduxForm({
    form:'formdemo',
    reset:true
 }) (Create)