import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/index.jsx'
import Tools from './pages/tools/index.jsx'
/* import './App.css' */

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/tools" component={Tools}/>
        </Switch>
      </Router>
    </>
  )
}
export default App
