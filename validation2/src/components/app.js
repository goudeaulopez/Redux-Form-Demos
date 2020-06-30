import React from 'react'
import Header from './header'
import Create from '../components/form1/create'
import List from '../components/form1/list'
import Update from '../components/form1/update'
import Details from '../components/form1/details'
import Delete from '../components/form1/delete'
import _ from 'lodash'


const ArrayList = []
class App extends React.Component{
  state={option:'',list:[], selected:null}

 onOption = option =>{
     this.setState({option})
 }
 onCreate = (elementList,option) => {
    ArrayList.push(elementList)
   this.setState({ list:ArrayList, option })

 }
 onSelected = (selected,option) =>{
     this.setState({selected,option})
 }
 onUpdate = (update,option) => {
    var y = _.findIndex(ArrayList,x=> x.id === this.state.selected.id)
    ArrayList[y]=update
    this.setState({list:ArrayList,option})
 }
 onDelete = (selected ,option)=> {
    var index= _.findIndex(ArrayList,selected.id)
    ArrayList.splice(index,1)
    this.setState({list:ArrayList,option})
 }

  renderOption(){
      var option = this.state.option
        switch(option){
            case 'create':
                return <Create onCreate={this.onCreate} option={this.state.option}/>
            case 'update':
                return <Update update={this.state.selected} option={this.state.option} onUpdate={this.onUpdate}/>
            case 'delete':
                return <Delete delete={this.state.selected} onDelete={this.onDelete}  onOption={this.onOption}/>
            case 'details':
                return <Details selected={this.state.selected} onOption={this.onOption}/>
            default:
                return <List onOption={this.onOption} list={this.state.list} onSelected={this.onSelected}/>
        }
  }
     render(){
        
        return(
            <div className="app"> 
                <Header onOption={this.onOption}/>
                <div>{this.renderOption()}</div>
                   
            </div>
        )
    }
}
export default App