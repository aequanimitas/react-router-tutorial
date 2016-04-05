import React from 'react';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

let App = React.createClass({
  render() {
    return <div>Hello!</div>
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
