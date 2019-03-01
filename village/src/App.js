import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';

import './App.css';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      selectedSmurfId: null
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        this.setState({smurfs: response.data})
      })
      .catch(error => {
        console.error('Server Error', error)
      })
  }

  smurfSelectedHandler = id => {
    this.setState({selectedSmurfId:id})
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route 
          exact path='/' 
          render={(props) => <Smurfs {...props} 
            smurfs={this.state.smurfs}
            clicked={(id) => this.smurfSelectedHandler(id)}
            sendNewData={(newData) => this.setState({smurfs: newData})} />} />
        <Route 
          path='/smurf-form' 
          render={(props) => <SmurfForm {...props}
            sendFormData={(newData) => this.setState({smurfs: newData})} />} />
        <Route 
          path='/smurf/:id'
          render={(props) => <Smurfs {...props} 
            smurfs={this.state.smurfs.filter(smurf => {
              return smurf.id === this.state.selectedSmurfId
            })}
            clicked={(id) => this.smurfSelectedHandler(id)}
            sendNewData={(newData) => this.setState({smurfs: newData})} />} />
      </div>
    );
  }
}

export default App;
