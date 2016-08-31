module.exports = React.createClass({
  getInitialState: function() {
    return {
      rack_active: 'samples'
    };
  },
  handleSelectChange: function(e) {
    this.setState({rack_active: e.target.value});
    this.props.config.sample_prefix = e.target.value;
    this.props.updatePlayer();
  },
  render: function() {
    return (
      <form className="set-menu" onSubmit={this.handleSubmit}>
        <label htmlFor="">Choose a set</label>
        <select name="rack-type" id="rack-type" onChange={this.handleSelectChange}>
          <option value="kryptorack">kryptorack</option>
          <option value="doomdrum">doomdrum</option>
          <option value="melody">melody</option>
        </select>
      </form>
    );
  }
});