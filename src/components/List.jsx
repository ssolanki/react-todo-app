var React = require('react');
var ListItem = require('./ListItem.jsx');

var List = React.createClass({
  render: function(){
    var createItem = function(item,key){
      return <ListItem key = {item + key} itemName = {item}/>;
    };
    return (
      <ul>{this.props.items.map(createItem)}</ul>
    );
  }
});

module.exports = List;
