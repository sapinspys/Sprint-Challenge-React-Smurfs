import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import { Button, Form, Label, Input } from 'reactstrap';

// Inline Styles
const formStyles = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '0 auto',
  height: '350px',
  background: 'whitesmoke',
  padding: '20px',
  borderRadius: '5px',
  boxShadow: '0 0 2px black',
  marginTop: '50px'
}

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false
    };
  }

  addSmurf = event => {
    event.preventDefault();

    // add code to create the smurf using the api
    axios
      .post(`http://localhost:3333/smurfs`, this.state)
      .then(response => {
        console.log(response.data)
        this.setState({ redirect: true })
      })
      .catch(error => {
        console.error('Server Error', error)
      })

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to='/' />
    }
    return (
      <div className="SmurfForm">
        <Form onSubmit={this.addSmurf} style={formStyles}>
          <Label style={{color:'gray', fontSize: '1.4rem'}}>
            Add a Smurf!
          </Label>
          <Input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <Button color='primary' type="submit">Add to the village</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
