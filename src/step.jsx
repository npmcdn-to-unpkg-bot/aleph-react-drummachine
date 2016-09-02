var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      active: false,
      active_sample: 'samples/a_kick.wav',
      object_position: null
    }
  },
  handleChange: function(e){
    if(e.target.value == 'mute.wav') {
      this.setState({ active: false, active_sample: e.target.value });
    } else {
      this.setState({ active: true, active_sample: e.target.value });
    }

    for(var i = 0;i < this.props.playerObject.length; i++) {
      if(this.props.playerObject[i].step_position == this.props.index) {
        this.props.playerObject.splice(i, 1);
      }
    }

    this.props.playerObject.push({
      step_position: this.props.index,
      type: 'carrier',
      sample: this.props.sample_prefix + '/' +e.target.value,
      position: this.props.index,
      title: 'step ' + (this.props.index + 1) + ' playing: ' + e.target.value
    });

    this.props.updatePlayer();
  },
  renderOptions: function(){
    var options = [];
    for(var i = 0; i < this.props.samples.length; i++) {
      options.push(<option value={this.props.samples[i].url}>{this.props.samples[i].title}</option>);
    }

    return options;
  },
  render: function(){
    return <div className={"step-container small-6 medium-3 columns " + (this.props.status ? "playing" : "")}>
      <select className={"step " + (this.state.active ? "active" : "")} onChange={this.handleChange} data-activesample={this.state.active_sample}>
        {this.renderOptions()}
      </select>
    </div>
  }
});