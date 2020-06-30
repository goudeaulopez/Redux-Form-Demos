import React from 'react'
import { Field, reduxForm} from 'redux-form'
import '../../styles/simpleform.css'

const arrayTest=[]

class SimpleForm2 extends React.Component{

 renderError = meta => {
        if(meta.error && meta.touched){
            return(
                <div>
                    <div className="text text-danger">{meta.error}</div>
                </div>
            )
        }
    }
inputMethod= values => {
     const classLabel = `${values.meta.error && values.meta.touched ? 'text text-danger': 'text text-primary'}` 
     const classInput = `${values.meta.error && values.meta.touched ? 'border border-danger':'border border-primary'}`
      return(
          <div className="field">
              <label className={classLabel}>{values.label}</label>
              <input {...values.input} autoComplete="off"  className={classInput}/>
              {this.renderError(values.meta)}
          </div>
      )
    }
    inputRadios = values => {
        
        const classradio = `${values.meta.error && values.meta.touched ? 'text text-danger': 'text text-primary'}`
        const classtext = `${values.meta.error && values.meta.touched ? 'required': ''}`
     return(
            <div>
                <div className='ui radio checkbox ml-3'>
                    <input {...values.input}  type="radio" className="primary"/>
                    <label className={classradio}>{values.label+' '+classtext}</label>
                </div>
                <div style={{display:'none'}} >{ this.renderError(values.meta)}</div>
            </div>
        )
    }
     inputCheckbock = values => {
       return(
            <div className="ui checkbox ml-3 mb-4">
                <input {...values.input} type="checkbox" />
                 <label className="text text-primary">Are u agree about you are required to bo be contacted with one of our team members</label>
           </div>
        )
    }
   
    
    onSubmit = values =>{
    
        var time = new Date();
        if(this.props.option === 'create'){
            var test =  Math.floor(Math.random() * 10) +1;
            while(arrayTest.find(e=>e===test)){
             test =  Math.floor(Math.random() * 1000) +1;
            }
             values.id=test
             arrayTest.push(test)
             values.time=time.toLocaleDateString() 
             this.props.onCreate(values)
             console.log(this.props.option)
        }else{
            console.log(this.props.option)
             
            this.props.onUpdate(values,'')
        }
           
     }

    render(){
     
        return(
            <div className="simpleform">
               <h3 className="text pt-2 pl-2 text-primary">{this.props.title}</h3>
                <form  onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form ml-2 mr-2">
                    
                    <Field name="email" component={this.inputMethod} label="Enter Email"/>
                    <Field name="phone" component={this.inputMethod} label="Enter Phone"/>
                     <h4 className="text pt-2 pl-2 text-primary">Calling Time</h4>
                    <Field name="appointment" component={this.inputRadios} label="Morning" value="morning"  type="radio"/>
                    <Field name="appointment" component={this.inputRadios} label="Afternoon" value="afternoon"  type="radio"/>
                    <Field name="appointment" component={this.inputRadios} label="Evening" value="evening"  type="radio"/>
                       <br/>
                    <Field name="agreement" simpleform2={'false'} component={this.inputCheckbock}/>
                     <br/>
                    <button  className="btn btn-primary">{this.props.button}</button>
                 </form>
            </div>
        )
    }
}
const validate = values => {
    const error={}
    if(!values.email){
        error.email = "no email added"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    {
        error.email = "enter a valid email address"
    }
    if(!values.phone){
        error.phone = "no phone added"
    }
    else if(!/^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/i.test(values.phone)){
        error.phone = "enter a valid phone number"
    }
    
    if(!values.appointment){
        error.appointment="xxxxxxx"
    }
    return error
}

export default reduxForm({
    form: 'simpleform2',
   // initialValues:{ agreement:false},
    validate
}) (SimpleForm2 )





