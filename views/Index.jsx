const React = require('react')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div style={myStyle}>
        <h1> Welcome to the Pokemon App! </h1>

        {/* by name */}
        <ul>
          {pokemon.map(poke => {
            let url = `/pokemon/${poke.name}`
            return (
              <li style={myStyle}>
                <a href={url}>{poke.name}</a>
              </li>
            )
          })}
        </ul>

        {/* by index */}
        {/* <ul>
          {pokemon.map((poke, index) => {
            let url = `/pokemon/${index}`
            return (
              <li style={myStyle}>
                <a href={url}>{poke.name}</a>
              </li>
            )
          })}
        </ul> */}
      </div>)
  }
}
module.exports = Index;