var React = require('react');

module.exports = React.createClass({
  handleClick: function(sample){
    this.props.playerObject.push({
      type: 'carrier',
      sample: 'samples/' + sample,
      position: this.props.playerObject.length,
      title: sample
    });

    this.props.updatePlayer();
  },
  render: function(){
    return <div className="pad small-3 columns">
      <div className="inner-wrapper" onClick={()=>this.handleClick(this.props.sample)}></div>
    </div>
  }
});