//= require jquery
//= require jquery_ujs
//= require foundation

var React  = require('react');
var Router = require('react-router');
var routes = require('routes.js.jsx');

$(function(){
  $(document).foundation();

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, null), document.body);
  });
});
