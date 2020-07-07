import React from 'react'
import Header from './header'
import Create from './form1/create'
import Delete from './form1/delete'
import Update from './form1/update'
import Details from './form1/details'
import List from './form1/list'
import _ from 'lodash'
import './styles/app.css'

const arrayList=[]
class App extends React.Component{
    state = {list:[],option:'', selected: null}
    onCreate = objeto => {
        arrayList.push(objeto)
        this.setState({list:arrayList,option:''})
        console.log(objeto)
    }
    onOption = option => {
        this.setState({option})
    } 
    onSelected = selected => {
        this.setState({selected,option:'details'})
    }
    onUpdate = (update)=> {
       var index = _.findIndex(arrayList,x=> x.id === update.id) //this.state.selected.id
       Array[index] = update
       this.setState({list:arrayList,selected:update ,option:'details'})
    }
   onDelete = deletes=> {
        var index = _.findIndex(arrayList,x=> x.id === deletes.id)
        arrayList.splice(index,1)
        this.setState({list:arrayList,option:''})
    }
    renderMenu = () => {
      var option = this.state.option
      switch(option){
          case 'create':
               return <Create onCreate={this.onCreate} option={this.state.option}/>
             case 'update':
                  return <Update update={this.state.selected} onUpdate={this.onUpdate} option={this.state.option} />
                 case 'delete':
                    return <Delete delete={this.state.selected} onDelete={this.onDelete} onOption={this.onOption}/>
                      case 'details':
                            return <Details selected={this.state.selected} onOption={this.onOption} />
                             default:
                                 return <List displayList={this.state.list} onSelected={this.onSelected}/>
      }
    }
    render(){
        return(
            <div className="app">
                <Header onOption={this.onOption}/><br/>
                 {this.renderMenu()}
            </div>
        )
    }
}
export default App