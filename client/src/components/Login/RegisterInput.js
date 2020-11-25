import React, { useState } from 'react';
import API from "../../utils/API";
//styling
import './Login.css';
import { Button, Card, InputGroup, FormControl } from "react-bootstrap";

function RegisterInput() {

  const [formObject, setFormObject] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formObject)
    if (formObject.firstName && formObject.lastName && formObject.email && formObject.password) {
      API.signUpUser({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        email: formObject.email,
        password: formObject.password
      })
      .then(() => console.log("user saved"))
      .catch(err => console.log(err))
    }
  }


  return (
    <Card>
      <Card.Body className="registerCard">
        <form className="form-group">
          <InputGroup onChange={handleInputChange} size="sm" className="mb-3" id="registerFirstName">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm inputText">First Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="firstName" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <InputGroup onChange={handleInputChange}  size="sm" className="mb-3" id="registerLastName">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Last Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="lastName"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <InputGroup onChange={handleInputChange}  size="sm" className="mb-3" id="registerEmail">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="email"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <InputGroup onChange={handleInputChange}  size="sm" className="mb-3" id="registerPassword">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-sm">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl name="password"  aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
          </InputGroup>
          <Button onClick={handleFormSubmit} variant="secondary" id="registerBtn" size="lg" block>
            Register
          </Button>
        </form>
      </Card.Body>
    </Card>
  )
}

export default RegisterInput;

