import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello React</h1>
        </header>
        <p className="App-intro">
          <Link to="/details">点击<code>页面跳转</code></Link>
          <Link to="/order">订单列表</Link>
        </p>
      </div>
    );
  }
}
render((
  <Link history={hashHistory}>
    <Link path="/" component={App}/>
  </Link>
),document.getElementById('app'));

export default App;
