var React = require('react');
var Step = require('./step');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      steps: 16
    }
  },
  render: function(){
    var steps = [];
    for (var i=0; i < this.state.steps; i++) {
      steps.push(<Step index={i} sample_prefix={this.props.sample_prefix} samples={this.props.samples} playerObject={this.props.playerObject} updatePlayer={this.props.updatePlayer} status={this.props.status} />);
    }

    return <div className="steps small-12 columns">{steps}</div>;
  }
});