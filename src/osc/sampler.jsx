var React = require('react');
var reactMusic = require('react-music');

module.exports = React.createClass({
  synth: null,
  getInitialState: function(){
    return {playing: true}
  },
  render: function(){
    return <reactMusic.Sampler
      sample={'samples/' + this.props.sample}
      steps={[this.props.position]}
    />
  }
});