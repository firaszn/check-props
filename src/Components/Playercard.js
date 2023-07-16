import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Playercard = ({ player }) => {
  return (
    <Card style={{ width: '25rem',}}>
      <Card.Img variant="top" src={player.imgsrc} />
      <Card.Body>
        <Card.Title>{player.name}</Card.Title>
        <Card.Text>
            {player.team} 
            
            </Card.Text>
            <Card.Body>
            {player.nationality}
            </Card.Body>
            
        
      </Card.Body>
      <Button variant="primary">more details</Button>
    </Card>
  );
};

export default Playercard;
