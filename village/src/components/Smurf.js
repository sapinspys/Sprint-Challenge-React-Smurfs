import React from 'react';

import { Card, CardTitle, CardText, Button } from 'reactstrap';

// Inline Styles
const cardStyles = {
  width: '30%',
  minWidth: '280px',
  marginBottom: '20px', 
  padding: '15px'
}

const Smurf = props => {
  return (
    <Card inverse color='info' style={cardStyles}>
      <CardTitle style={{
                fontSize:'1.4rem', 
                borderBottom: '1px solid white'
                }}>
                    {props.name}
            </CardTitle>
      <CardText>
        <strong>{props.height} tall</strong>
      </CardText>
      <CardText>{props.age} smurf years old</CardText>
      <Button onClick={props.deleteSmurf}
          size='sm'
          color='warning'>
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

