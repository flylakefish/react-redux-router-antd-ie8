

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('html5shiv');
require('es6-promise');
require('fetch-ie8');

// require('jquery');


const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App');
// const $ = require('jquery');
const {Button,Menu} = require('antd');


ReactDOM.render(
  <div>
    <App/>
    <Button>submit</Button>

    <Menu>
      <Menu.Item>111</Menu.Item>
      <Menu.Item>222</Menu.Item>
      <Menu.Item>333</Menu.Item>
      <Menu.Item>14441</Menu.Item>
    </Menu>
  </div>
  ,
  document.getElementById('app')
);
