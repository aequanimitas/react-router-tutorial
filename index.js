import React from 'react';
import { render } from 'react-dom'

let App = React.createClass({
  render() {
    return <div>Hello!</div>
  }
})

render(
  <App />,
  document.getElementById('app')
)
