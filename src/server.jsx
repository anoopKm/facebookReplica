'use strict';

var React = require('react');
var path = require('path');
import { Router, Route } from 'react-router';
import {match, RoutingContext} from 'react-router';
import {renderToString} from 'react-dom/server';
var routes = require("./Routes.jsx");


module.exports = function (req, res) {
	match({routes, location: req.url.pathname}, (err, redirectLocation) => {
		if(err) {
			console.log(err);
			res.status(500).send(err.message);
		}
		res.response(renderToString(<RoutingContext />));
	})
};