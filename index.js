import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link } from 'react-router'

let App = React.createClass({
  render() {
    return(
      <div>
        <h1>React Router tutorial</h1>
        <ul role="nav">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/repos">Repos</Link>
          </li>
        </ul>
      </div>)
  }
})


let About = React.createClass({
  render() {
    return <div>About!</div>
  }
})

let Repos = React.createClass({
  render() {
    return <div>Repos!</div>
  }
})
render(
  <Router history={hashHistory}>
   <Route path="/" component={App} /> 
   <Route path="/repos" component={Repos} /> 
   <Route path="/about" component={About} /> 
  </Router>,
  document.getElementById('app')
)
