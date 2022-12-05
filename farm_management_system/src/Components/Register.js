import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Register.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  function ToLogin() {
    navigate('/login');
  }

  const [inputVal, setInputValue] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    ConfirmPass: '',
  });

  const { name, username, email, password, ConfirmPass } = inputVal;

  const onInputChange = (e) => {
    setInputValue({ ...inputVal, [e.target.name]: e.target.value });
    // console.log(JSON.stringify(inputVal));
  };

  const [select, setSelection] = useState({
    option: '',
  });

  const radioChange = (e) => {
    setSelection({ ...select, [e.target.name]: e.target.value });
    // console.log(select);
  };

  const Register = (e) => {
    e.preventDefault();

    if (name !== '') {
      if (username !== '') {
        if (email !== '') {
          if (email.includes('@')) {
            if (password !== '') {
              if (password.length >= 6) {
                if (password === ConfirmPass) {
                  if (select.radio === 'farmer') {
                    axios({
                      url: 'http://localhost:3001/FarmerRegistration',
                      method: 'POST',
                      data: inputVal,
                    }).then((response) => {
                      console.log(response.data.user);
                    });
                    // console.log('Farmer is checked');
                  } else {
                    axios({
                      url: 'http://localhost:3001/OwnerRegistration',
                      method: 'POST',
                      data: inputVal,
                    }).then((response) => {
                      console.log(response.data.user);
                    });
                    // console.log('Owner is checked');
                  }

                  alert('Success');
                } else {
                  alert('Password and Confirm Password are not same');
                }
              } else {
                alert('Password must contain atleast 6 characters');
              }
            } else {
              alert('Password is required');
            }
          } else {
            alert('Email is not valid');
          }
        } else {
          alert('Email is required');
        }
      } else {
        alert('Username is required');
      }
    } else {
      alert('Name is required');
    }
  };

  return (
    <>
      <div className="Registercontainer mt-5">
        <section>
          <h3>Register</h3>
          <Form>
            <div className="radios">
              <Form.Check
                name="radio"
                type="radio"
                value="owner"
                label="Owner"
                defaultChecked={true}
                onChange={(e) => radioChange(e)}
              />
              <Form.Check
                name="radio"
                type="radio"
                value="farmer"
                label="Farmer"
                onChange={(e) => radioChange(e)}
              />
            </div>
            <Form.Group className="mb-3 lg-2" controlId="formBasicFirstname">
              <Form.Control
                type="text"
                name="name"
                onChange={(e) => onInputChange(e)}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 lg-2" controlId="formBasicUsername">
              <Form.Control
                type="text"
                name="username"
                onChange={(e) => onInputChange(e)}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3 lg-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => onInputChange(e)}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3 lg-2" controlId="formBasicPhone">
              <Form.Control
                type="phone"
                name="phone"
                onChange={(e) => onInputChange(e)}
                placeholder="Phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={(e) => onInputChange(e)}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                name="ConfirmPass"
                onChange={(e) => onInputChange(e)}
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              className="BtnSubmit"
              onClick={Register}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
            <p className="bottomLine">
              Already an user ? <span onClick={ToLogin}>Login</span>
            </p>
          </Form>
        </section>
      </div>
    </>
  );
};

export default Register;
