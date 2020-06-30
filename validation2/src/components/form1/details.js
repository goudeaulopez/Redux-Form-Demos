import React from 'react'
import '../../styles/details.css'

class Details extends React.Component{
    render(){
        const agreement= this.props.selected.agreement === true? 
        <i className="icon thumbs up green"></i>: <i className="icon thumbs down red"></i>
    return(
    <div className="details">
         <div className="ui segments">
             <div className="ui segment">
               <h2 className="text text-primary">Details</h2>
             </div>
             <div className="ui segment">
                <h3 className="text text-primary">{this.props.selected.email}</h3>
            </div>
            <div className="ui segment">
               <h3 className="text text-primary">{this.props.selected.phone}</h3>
            </div>
            <div className="ui segment">
              <h3 className="text text-primary">{this.props.selected.appointment}</h3>
            </div>  
              
            <div  className="ui segment">
                {agreement}
            </div>
            <div  className="ui segment" style={{display:'flex'}}>
                <button onClick={()=>this.props.onOption('update')} className="btn btn-primary ml-4">Edit</button>
                <button onClick={()=>this.props.onOption('delete')} className="btn btn-danger ml-1">Delete</button>
            </div>
        </div>
    </div>
    )
    }
}
export default Details



