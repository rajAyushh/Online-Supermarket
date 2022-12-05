import React from 'react'
import "./signup.css"
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
    <Card className='mx-2 w-25 my-auto mx-auto d-flex'>
      <Card.Title className='mx-auto mt-4'>REGISTER</Card.Title>
      <Card.Body className='mx-2'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <p>Existing user? <Link to="/">Login</Link></p>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}
