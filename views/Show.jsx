const React = require('react')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const pokemon  = this.props.pokemon;
    console.log(pokemon.name);

    return (
      <div style={myStyle}>
        <h1> {pokemon.name} </h1>

      </div>)
  }
}
module.exports = Index;