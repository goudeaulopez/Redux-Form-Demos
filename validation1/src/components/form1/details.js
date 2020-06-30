import React from 'react'
import '../../styles/details.css'

class Details extends React.Component{
    render(){
    if(!this.props.selected){
        return <div>loading</div>
    }
    return(
    <div className="details">
        <h2 className="text text-primary pl-3">Details</h2>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title text-primary">
                    {this.props.selected.firstname +' '+this.props.selected.lastname}
                </h3>
                <h4  className="card-title text-primary">{this.props.selected.email}</h4>
                <h4  className="card-title text-primary">{this.props.selected.phone}</h4>
                <p className="card-title text-primary">{this.props.selected.description}</p>
        </div>
         <div className="buttons">
             <button className="btn btn-primary ml-5"
              onClick={()=>this.props.onSelected(this.props.selected,'update')}>edit</button>
             <button className="btn btn-danger ml-2"
              onClick={()=>this.props.onSelected(this.props.selected,'delete')}
             >delete</button>
         </div>
        </div>
    </div>
    )
    }
}
export default Details

/*
<div className="card" style="width: 18rem;">
            <div className="card-body">
             <h5 className="card-title">{this.props.selected.firstname +' '+this.props.selected.lastname}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
       </div>



*/

