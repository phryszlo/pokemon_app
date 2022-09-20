const React = require('react')

class Index extends React.Component {
  render() {
    const pokemon = this.props.pokemon;
    const index = this.props.index;
    const max = this.props.max;
    const inverted = this.props.inverted ? 'inverted' : '';
    let prev, next = index;

    prev = parseInt(index) === 0 ? max : parseInt(index) - 1
    next = parseInt(index) === max ? 0 : parseInt(index) + 1

    let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    // only add the extension for the img if it's not already there.
    const image = pokemon.img.endsWith('.jpg') || pokemon.img.endsWith('.png') ? pokemon.img : pokemon.img + '.jpg';
    // const image = pokemon.img + '.jpg';
    return (
      <div>
        <div className="head-container">
          <h1 className="header">{name}</h1>
          <a className="poke-index-link" href="/">PokeIndex</a>
          <a className="poke-edit-link" href={`/poke/${index}/edit`}>Edit {name}</a>
        </div>
        <div className="container show-div">
          <link rel="stylesheet" href="/css/style.css"></link>
          <div className="poke-scroller">
            <a className="next-poke" href={`/pokemon/${prev}`}>⬅️</a>
            <h2 className="poke-subhead"> {name} </h2>

            <a className="prev-poke" href={`/pokemon/${next}`}>➡️</a>
          </div>
          <img
            className={`poke-img ${inverted}`}
            src={image}
            alt={pokemon.name + ' image'}
            width={'200px'} />
        </div>
        <script src="/js/app.js" type="module" />
      </div>
    )
  }
}
module.exports = Index;