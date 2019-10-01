import React from 'react';

class App extends React.Component {
  state = { name: 'viewers' };

  render() {
    const { name } = this.state;

    return <div className="hello">Hello, {name}!</div>;
  }
}

export default App;
