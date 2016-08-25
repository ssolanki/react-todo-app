var React = require('react');
var List = require('./List.jsx');
var ListManager = React.createClass({
  getInitialState: function(){
    return {items:[],newItemName:''};
  },
  handleSubmit: function(e){
    e.preventDefault();
    var currentItems = this.state.items;
    currentItems.push(this.state.newItemName);
    this.setState({items:currentItems,newItemName:''});
  },
  onChange: function(e){
    this.setState({newItemName: e.target.value});
  },
  render: function(){
    // this handled by react.
    return (
      <div>
        <h3> {this.props.title} </h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newItemName}/>
          <button> Add</button>
        </form>
        <List items={this.state.items}/>
      </div>
    );
  }
});
module.exports = ListManager;
