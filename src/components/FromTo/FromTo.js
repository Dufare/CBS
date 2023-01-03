import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-router-dom';
import { Input } from 'reactstrap';
import fromTo from "./fromTo.module.css"
import { FaHome } from "react-icons/fa";


const FromTo = () => {
  return (
    
    <Card className={fromTo.card}>
    
    <Card.Body>
    
     <div className='container d-flex mx-5 '>
      
      <div className="mx-3 col-md-5">
     <Input className='bg-dark' placeholder='From Location'></Input>
     </div>
     <div className="mx-3 col-md-5">
     <Input className='bg-dark' placeholder='Destination Location'></Input>
     </div>
     </div>
     <Button className= {fromTo.marginRight14+" my-3 col-md-2 float-end"} variant="outline-success">Next</Button>{' '}
     
    
    </Card.Body> 
    
  </Card>
  
  )
}

export default FromTo
