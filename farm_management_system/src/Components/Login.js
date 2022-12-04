import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
  const navigate = useNavigate();

  const [inputVal, setInputValue] = useState({
    username: '',
    password: '',
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

  console.log(inputVal);

  function ToSuccessLoginHome() {
    navigate('/successlogin');
  }

  function ToRegister() {
    navigate('/register');
  }

  return (
    <div className="LoginContainer">
      <div className="App">
        <div className="cover  mt-5">
          <section>
            <h3>Login</h3>
            <Form>
            <div className='radios'>
              <Form.Check name="radio" type="radio" label="Owner" />
              <Form.Check name="radio" type="radio" label="Farmer" />
            </div>
              <Form.Group className="mb-3 lg-2" controlId="formBasicUsername">
                <Form.Control
                  type="text"
                  name="username"
                  onChange={getData}
                  placeholder="Username"
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
              <Button
                className="BtnSubmit"
                variant="primary"
                type="submit"
                onClick={ToSuccessLoginHome}
              >
                Login
              </Button>
              <p className="bottomLine">
                New User ? <span onClick={ToRegister}>Register</span>
              </p>
            </Form>
          </section>
        </div>
        <div className="otherLogin">
          <p>
            Login as <span>Manager</span>
          </p>
          <p>
            Login as <span>Admin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
