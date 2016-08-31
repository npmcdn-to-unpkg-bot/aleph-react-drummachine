var React = require('react');
var Sampler = require('./osc/sampler');

module.exports = React.createClass({
  audioComponent: null,
  getInitialState: function(){
    return { playing: false, position: 0 }
  },
  handleClick: function(){
    this.setState({ playing: !this.state.playing });
  },
  addAudioComponent: function() {
    return <Sampler sample={this.props.sample} position={this.props.position} />
  },
  render: function (){
    return <div onClick={this.handleClick} className={"player " + (this.state.playing ? "playing" : "")} data-hz={this.props.freq}>
      <p>{this.props.title}</p>
      {this.addAudioComponent()}
    </div>
  }
});