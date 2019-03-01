import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardTitle, CardText, Button } from 'reactstrap';

// Inline Styles
const cardStyles = {
  width: '30%',
  minWidth: '280px',
  marginBottom: '20px', 
  padding: '15px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}

const noLinkStyles = {
  textDecoration: 'none',
}

const Smurf = props => {
  return (
  <Card inverse color='info' style={cardStyles} onClick={props.clicked}>
    <CardTitle style={{
      fontSize:'1.4rem', 
      borderBottom: '1px solid white'
      }}>
          {props.name}
    </CardTitle>
    <CardText>
      <strong>{props.height} tall</strong>
    </CardText>
    <CardText>
      {props.age} smurf years old
    </CardText>
    <Link to={`/smurf/${props.id}`} style={noLinkStyles}>
      <Button size='sm'
        color='success' block>
          More Information
      </Button>
    </Link>
    <Button onClick={props.deleteSmurf}
        size='sm'
        color='warning'>
            Edit Smurf
    </Button>
    <Button onClick={props.deleteSmurf}
        size='sm'
        color='danger'>
            Delete Smurf
    </Button>
  </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

