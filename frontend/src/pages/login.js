import React, {useState} from 'react'
import axios from 'axios'
// import styles from './Login.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function Login() {
  const [user, setUser] = useState([]);
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
    <Card className='mx-2 w-25 my-auto mx-auto d-flex'>
      <Card.Title className='mx-auto mt-4'>LOGIN</Card.Title>
      <Card.Body className='mx-2'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
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
