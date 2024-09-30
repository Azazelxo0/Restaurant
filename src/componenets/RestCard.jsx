import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function RestCard({resturant}) {
  return (
    <>
    <Link to={`restaurant_view/${resturant.id}`} style={{textDecoration:"none"}} >
    <Card style={{ width: '18rem' }} className='p-2'>
      <Card.Img variant="top" src= {resturant.photograph} style={{height:"300px"}} className='rounded'/>
      <Card.Body>
        <Card.Title className='text-center text-warning'>{resturant.name}</Card.Title>
        <Card.Text>
          Neighbour Hood <span className='text-warning ms-2'>{resturant.neighborhood}</span>
        </Card.Text>
        
      </Card.Body>
    </Card>
    
    </Link>
     
    
    </>
  )
}
