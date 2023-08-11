import React, { Component } from 'react';
import './App.css';
import JokeList from './JokeList.js';

// function App() {
//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }

class App extends Component {
  render () {
    return (
      <div className="App">
        <JokeList />
      </div>
    )
  }
}

export default App;
