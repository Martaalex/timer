import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 10,
    };
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(
        state => ({time: state.time - 1}),
        () => {
          if (this.state.time === 0) {
            clearInterval(this.interval);
          }
        },
      );
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.time}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
