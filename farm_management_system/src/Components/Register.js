import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../Styles/Register.css';

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
  const getData = (e) => {
    const { value, name } = e.target;

    setInputValue(() => {
      return {
        ...inputVal,
        [name]: value,
      };
    });
  };

  const [data, setData] = useState([]);

  const Register = (e) => {
    e.preventDefault();

    const { name, username, email, password, ConfirmPass } = inputVal;

    if (name !== '') {
      if (username !== '') {
        if (email !== '') {
          if (email.includes('@')) {
            if (password !== '') {
              if (password.length >= 6) {
                if (password === ConfirmPass) {
                  localStorage.setItem(
                    'AuthRegister',
                    JSON.stringify([...data, inputVal])
                  );
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
              <Form.Check name="radio" type="radio" label="Owner" />
              <Form.Check name="radio" type="radio" label="Farmer" />
            </div>
            <Form.Group className="mb-3 lg-2" controlId="formBasicFirstname">
              <Form.Control
                type="text"
                name="name"
                onChange={getData}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 lg-2" controlId="formBasicUsername">
              <Form.Control
                type="text"
                name="username"
                onChange={getData}
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group className="mb-3 lg-2" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                onChange={getData}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                onChange={getData}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <Form.Control
                type="password"
                name="ConfirmPass"
                onChange={getData}
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
