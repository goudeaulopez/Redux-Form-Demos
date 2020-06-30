import React from 'react'
import _ from 'lodash'
import Header from './header'
import Create from './form1/create'
import Details from './form1/details'
import Delete from './form1/delete'
import Update from './form1/update'
import List from './form1/list'
import '../styles/app.css'
const array=[]
class App extends React.Component{
    state = {option:'', list:[], selected:null}
    
    onOption = option => {
        this.setState({option})
    }
    onList = (form,option) => {
    
            array.push(form)
            this.setState({option, list:array})
    }
    onUpdate= (form,option) => {
    var y = _.findIndex(array,x=> x.email === this.state.selected.email)
         array[y]=form;
        this.setState({option, list:array })
    
}
 onSelected = (selected,option) => {
        this.setState({selected,option})
    }
onDelete = (selected,option)=>{
    var y = _.findIndex(array,x=> x.email === selected.email)
   array.splice(y,1)
    this.setState({list:array,option})
}
    renderOption = () =>{
    
        if(this.state.option === 'create'){
            return <Create onList={this.onList} onCheck={this.state.list} />
        }else if(this.state.option === 'update'){
            return <Update selected={this.state.selected} onList={this.onUpdate}/>
        }else if(this.state.option === 'details'){
            return <Details selected={this.state.selected} onSelected={this.onSelected} onDelete={this.onDelete}/>
        }else if(this.state.option === 'delete'){
            return <Delete onDelete={this.onDelete} selected={this.state.selected} onSelected={this.onSelected}/>
        }
        else{
            return <List onOption={this.onOption} displayList={this.state.list} onSelected={this.onSelected}/>
        }
    }
     render(){
        return(
            <div className="app"> 
                <Header onOption={this.onOption}/>
                {this.renderOption()}
                   
            </div>
        )
    }
}
export default App