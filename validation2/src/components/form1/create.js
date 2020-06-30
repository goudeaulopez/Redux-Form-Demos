import React from 'react'
import SimpleForm2 from './simpleform2'

class Create extends React.Component{
    render(){
        return(
            <div>
                <SimpleForm2 
                    title="Create Record" 
                    button="Create" 
                    onCreate={this.props.onCreate}
                    option = {this.props.option}
                />
            </div>
        )
    }
}
export default Create

/*
 onSubmit = values => {
        console.log(values)
    }
     render(){
        return(
            <div>
               <ContactForm onSubmit={this.onSubmit}/>
            </div>
        )
    }


  onChange = e => {
      let files = e.target.files 
      let reader = new FileReader();
      reader.readAsDataURL(files[0])
      reader.onload = e =>{
          console.log(e.target.result)
      }
    }

   render(){
       return(
           <div>
               <form>
                   <input type="file" onChange={this.onChange}/>
                    <button type="submit">click</button>
               </form>
           </div>
       )
   }
}  
*/