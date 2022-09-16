const React = require('react')

const myStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const index = this.props.index;
    const max = this.props.max;
    let prev, next = index;

    prev = parseInt(index) === 0 ? max : parseInt(index) - 1
    next = parseInt(index) === max ? 0 : parseInt(index) + 1

    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    const image = pokemon.img + '.jpg';
    return (
      <div>
        <h1 className="header">Gotta Catch 'Em All</h1>
        <div className="container show-div">
          <link rel="stylesheet" href="/css/style.css"></link>
          <a href="/">PokeIndex</a>
          <h2> {name} </h2>
          <div className="poke-scroller">
            <a href={`/pokemon/${prev}`}>⬅️</a>
            <a href={`/pokemon/${next}`}>➡️</a>
          </div>
            <img src={image} alt={pokemon.name + ' image'} width={'200px'} />
        </div>
      </div>
    )
  }
}
module.exports = Index;