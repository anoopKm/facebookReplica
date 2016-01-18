var React = require('react');
import { browserHistory, Router, Route } from 'react-router';
var MainPage = require('../src/components/Main.jsx');
var routes = require('./Routes.jsx')
var ReactDOM = require('react-dom')

module.exports = function () {
	ReactDOM.render(React.createElement(MainPage), document.getElementById('content'));
};