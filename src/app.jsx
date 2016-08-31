var React = require('react');
var Drummachine = require('./drummachine');

var machine_one = {
  title: 'Track 1 // Kryptorack',
  config: {
    sample_prefix: 'kryptorack'
  },
  player: [
  ],
  samples: [
    {
      title: "Mute",
      url: "mute.wav"
    },
    {
      title: "Kick",
      url: "kick.wav"
    },
    {
      title: "Snare",
      url: "snare.wav"
    },
    {
      title: "HiHat",
      url: "hat.wav"
    },
    {
      title: "Tom",
      url: "tom.wav"
    }
  ]
}

var machine_two = {
  title: 'Track 2 // Doomdrum',
  config: {
    sample_prefix: 'doomdrum'
  },
  player: [
  ],
  samples: [
    {
      title: "Mute",
      url: "mute.wav"
    },
    {
      title: "Kick",
      url: "kick.wav"
    },
    {
      title: "Snare",
      url: "snare.wav"
    },
    {
      title: "HiHat",
      url: "hat.wav"
    },
    {
      title: "Tom",
      url: "tom.wav"
    }
  ]
}

var machine_three = {
  title: 'Track 3 // Loops',
  config: {
    sample_prefix: 'melody'
  },
  player: [
  ],
  samples: [
    {
      title: "Mute",
      url: "mute.wav"
    },
    {
      title: "Bass",
      url: "kick.wav"
    },
    {
      title: "Arp",
      url: "loop_2.wav"
    }
  ]
}


var track_one = React.createElement(Drummachine, machine_one);
var track_two = React.createElement(Drummachine, machine_two);
var track_three = React.createElement(Drummachine, machine_three);

ReactDOM.render(track_one, document.getElementById('track_one'));
ReactDOM.render(track_two, document.getElementById('track_two'));
ReactDOM.render(track_three, document.getElementById('track_three'));
