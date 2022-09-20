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
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    const image = pokemon.img + '.jpg';
    return (
      <div>
        <link rel="stylesheet" href="/css/style.css"></link>

        <div className="head-container">
          <h1 className="header">{name}</h1>
          <a className="poke-index-link" href="/">PokeIndex</a>
        </div>

        <form className="form" action={`/poke/${index}/edit`} method="POST">
          <div className="form-field">
            <div className="label">Name:</div>
            <input className="name-input" type="text" name="name" defaultValue={name} />
          </div>
          <div className="form-field">
            <div className="label">Image URL:</div>
            <input className="url-input" type="text" name="img" defaultValue={image} />
          </div>
          <input type="submit" name="" value="Update Pokemon" />
        </form>

      </div>
    )
  }
}
module.exports = Index;