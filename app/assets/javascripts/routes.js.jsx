var React         = require('react');
var ReactRouter   = require('react-router');
var Route         = ReactRouter.Route;
var DefaultRoute  = ReactRouter.DefaultRoute;
var NotFoundRoute = ReactRouter.NotFoundRoute;

var TodoApp  = require('components/TodoApp.js.jsx');
var TodoMain = require('components/TodoMain.js.jsx');

module.exports = (
  <Route handler={TodoApp}>
    <Route name="All" path="/" handler={TodoMain} showing="all" />
    <Route name="Completed" path="/completed" handler={TodoMain} showing="completed" />
    <Route name="Active" path="/active" handler={TodoMain} showing="active" />
  </Route>
);
