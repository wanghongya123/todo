import React from "react"
import TodoList from "./TodoList.js"
import From   from "./From.js"
import Actions   from "./Actions.js"
const Header = ()=>(
  <div className="header">TODO</div>
)

// const From = ()=>(
//   <div className="from">TODO</div>
// )
// const Actions = ()=>(
//   <div className="actions">TODO</div>
// )
class Main extends React.Component{
  render(){
    return(
      <div className="main">
        <Header/>
        <TodoList/>
        <From/>
        <Actions/>
      </div>
    )
  }
}
export default Main
