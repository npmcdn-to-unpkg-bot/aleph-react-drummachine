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
    },
    {
      title: "Rattle",
      url: "rattle.wav"
    },
    {
      title: "Kick Alt",
      url: "kick_alt.wav"
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
    },
    {
      title: "Reso Kick",
      url: "reso_kick.wav"
    },
    {
      title: "Kick Snare",
      url: "kick_snare.wav"
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
      title: "Drone 1",
      url: "drone_1.wav"
    },
    {
      title: "Drone 2",
      url: "drone_2.wav"
    },
    {
      title: "Drone 3",
      url: "drone_3.wav"
    },
    {
      title: "Drone 4",
      url: "drone_4.wav"
    },
    {
      title: "Drone 5",
      url: "drone_5.wav"
    },
    {
      title: "Drone 6",
      url: "drone_6.wav"
    },
    {
      title: "Drone 7",
      url: "drone_7.wav"
    },
    {
      title: "Drone 8",
      url: "drone_8.wav"
    },
  ]
}


var track_one = React.createElement(Drummachine, machine_one);
var track_two = React.createElement(Drummachine, machine_two);
var track_three = React.createElement(Drummachine, machine_three);

ReactDOM.render(track_one, document.getElementById('track_one'));
ReactDOM.render(track_two, document.getElementById('track_two'));
ReactDOM.render(track_three, document.getElementById('track_three'));
