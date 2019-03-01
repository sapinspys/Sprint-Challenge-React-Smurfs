import React from 'react';

import { Card, CardTitle, CardText, Button } from 'reactstrap';

const Smurf = props => {
  return (
    <Card className="Smurf">
      <CardTitle>{props.name}</CardTitle>
      <CardText>
        <strong>{props.height} tall</strong>
      </CardText>
      <CardText>{props.age} smurf years old</CardText>
    </Card>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

