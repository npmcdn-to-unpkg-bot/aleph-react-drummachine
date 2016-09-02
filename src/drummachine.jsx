var React = require('react');
var Player = require('./module');
var Sequencer = require('./sequencer');
var reactMusic = require('react-music');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      player: this.props.player.length,
      playing: true
    }
  },
  updatePlayerLength: function(){
    this.setState({
      player: this.props.player.length,
      playing: true
    });
  },
  stopTrack: function(){
    this.setState({playing: !this.state.playing});
  },
  render: function(){
    var player =  this.props.player.map(function(single_player) {
      return <Player
        title={single_player.title}
        type={single_player.type}
        waveform={single_player.waveform}
        melody={single_player.melody}
        position={single_player.position}
        sample={single_player.sample}
      />
    });
    return <div className="drone-container">
      <div className="controls">
        <button onClick={this.stopTrack} className={"button " + (this.state.playing ? "" : "stopped")}>{(this.state.playing ? "אפס" : "אחד")}</button>
      </div>
      <div className="menu-container small-12 columns">
        <Sequencer sample_prefix={this.props.config.sample_prefix} playerObject={this.props.player} samples={this.props.samples} updatePlayer={this.updatePlayerLength} status={this.state.playing} />
      </div>
      <div className="hidden player-container small-12 columns">
        <div className="small-12 columns">
          <reactMusic.Song tempo={120} playing={this.state.playing}>
            <reactMusic.Sequencer resolution={16} bars={1}>
              {player}
            </reactMusic.Sequencer>
          </reactMusic.Song>
        </div>
      </div>
    </div>
  }
});
