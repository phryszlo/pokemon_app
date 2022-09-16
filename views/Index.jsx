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
        <h1 className="header"> Welcome to the Pokemon App! </h1>
        <div className="container index-div">
          <link rel="stylesheet" href="/css/style.css"></link>

          {/* by name */}
          {/* <ul>
            {pokemon.map((poke, index) => {
              let url = `/pokemon/${poke.name}`
              let name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
              return (
                <li className="index-li" key={`${poke.name} + ${poke.index}`}>
                  <a href={url}>{name}</a>
                </li>
              )
            })}
          </ul> */}

          {/* by index */}
          <ul>
          {pokemon.map((poke, index) => {
            let url = `/pokemon/${index}`
            let name = poke.name.charAt(0).toUpperCase() + poke.name.slice(1)
            return (
              <li className="index-li" key={`${poke.name} + ${poke.index}`}>
                <a href={url}>{name}</a>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    )
  }
}
module.exports = Index;