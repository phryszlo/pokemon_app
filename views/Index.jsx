const React = require('react')


const divStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  color: '#ffffff',
  backgroundColor: '#000000',
};

const visitedStyle = {
  color: '#ffffff'
}

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <div className="head-container">
          <h1 className="header"> Welcome to the Pokemon App! </h1>
          <a className="poke-index-link" href="/poke/new">Add New Pokemon</a>
        </div>
        <div className="container index-div">
          <link rel="stylesheet" href="/css/style.css"></link>

          <ul className='poke-index'>
            {pokemon.map((poke, index) => {
              let url = `/pokemon/${index}`
              let name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
              return (
                <li className="index-li" key={`poke-${poke.index}`}>
                  <a href={url}>{name}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <script src="/js/app.js" type="module" />
      </div>
    )
  }
}
module.exports = Index;