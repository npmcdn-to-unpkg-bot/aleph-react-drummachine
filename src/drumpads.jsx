var React = require('react');
var Pad = require('./pad');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      sampleset: {
        initial: ['a_kick.wav', 'a_rim.wav', 'a_snare.wav', 'a_tom.wav']
      }
    };
  },
  render: function() {
    var that = this;
    var pads =  this.state.sampleset.initial.map(function(single_pad) {
      return <Pad sample={single_pad} playerObject={that.props.playerObject} updatePlayer={that.props.updatePlayer} />
    });

    return (
      <div className="drumpad small-12 columns">
        {pads}
      </div>
    );
  }
});