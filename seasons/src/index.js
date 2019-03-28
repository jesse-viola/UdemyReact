import React from 'react';
import ReactDOM from 'react-dom';
import { SeasonDisplay } from './Components/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: ''
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }

  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return (
        <div>Latitude: { this.state.latitude }</div>
      );
    }
    
    if (!this.state.latitude && this.state.errorMessage) {
      return (
        <div>Error: { this.state.errorMessage }</div>
      );
    }

    return <div>Loading</div>
  }
}

ReactDOM.render(
  <App />, document.getElementById('root')
);