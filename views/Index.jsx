const React = require('react')

const myStyle = {
  color: '#ffffff',
  backgroundColor: '#000000',
};

class Index extends React.Component {
  render () {
    return (
      <div style={myStyle}>
      <h1> Index Page </h1>
      </div>)
  }
}
  module.exports  = Index;