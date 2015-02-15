var React        = require('react');
var ReactRouter  = require('react-router')
var RouteHandler = ReactRouter.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Todo App</h3>
        <RouteHandler />
      </div>
    );
  }
});
