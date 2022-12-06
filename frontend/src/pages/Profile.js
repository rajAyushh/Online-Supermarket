import React from "react";
import SideBar from "../components/SideBar";
import "./Profile.css";
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Profile() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="profilecard">

        <div className="usericon"></div>
        <Form className="my-3">
          <Form.Group className="mb-3 w-50 m-auto" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3 m-auto w-50" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 m-auto w-50" controlId="formBasicText">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" placeholder="Enter mobile no." />
          </Form.Group>

          <Form.Group className="mb-3 m-auto w-50" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3 m-auto w-50" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}
