import React from "react"
import "./app.css"
import Main from "./main.js"
import store from "./redux/store.js"
import { Provider } from "react-redux"

const App = ()=>(
  <Provider store={store}>
    <div className="App">
    <Main/>
    </div>
  </Provider>

)

export default App
