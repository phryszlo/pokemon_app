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

    return (
      <div>
        <link rel="stylesheet" href="/css/style.css"></link>
        <h1 className="header">New Pokemon page</h1>
        {/* NOTE: action will be the route, method will be the HTTP verb */}
        <form className="form" action="/pokemon" method="POST">
        <div className="form-field"><div className="label">Name:</div><input className="name-input" type="text" name="name" /></div>
          <div className="form-field"><div className="label">Image URL:</div><input className="url-input" type="text" name="img" /></div>
          <input type="submit" name="" value="Add Pokemon" />
        </form>
      </div>
    )
  }
}
module.exports = Index;