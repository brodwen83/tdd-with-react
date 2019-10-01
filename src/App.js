import React from 'react';
import Name from './components/Name';

class App extends React.Component {
  state = { name: 'viewers' };

  render() {
    const { name } = this.state;

    return (
      <div className="hello">
        Hello, {name}!
        <Name />
      </div>
    );
  }
}

export default App;
