import React, { Component } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import Smurf from './Smurf';

// Styled Components
const SmurfContainer = styled.div`
    margin-top: 20px;
`;

const WrapperContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 30px;
`;

class Smurfs extends Component {
  deleteSmurfHandler = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <SmurfContainer>
        <h1>Smurf Village</h1>
        <WrapperContainer>
            {this.props.smurfs.map(smurf => {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  deleteSmurf={() => this.deleteSmurfHandler(smurf.id)} />);
            })}
        </WrapperContainer>
      </SmurfContainer>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
