import React, { useState } from 'react';
import '../Styles/Login.css';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();

  const [inputVal, setInputValue] = useState({
    Name: '',
    username: '',
    password: '',
    loginstatus: 'MainNavbar',
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

  const [select, setSelection] = useState({
    option: '',
    checkLoginStatus: '',
  });

  const radioChange = (e) => {
    setSelection({ ...select, [e.target.name]: e.target.value });
  };

  const [FarmerData, SetFarmerData] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/Farmerlogin/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => SetFarmerData(data.data));
  }, []);

  const [OwnerData, SetOwnerData] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:3001/Ownerlogin/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => SetOwnerData(data.data));
  }, []);

  const ToSuccessLoginHome = (e) => {
    e.preventDefault();

    if (select.radio === 'farmer') {
      const Username = document.getElementById('username').value;
      const Password = document.getElementById('password').value;
      var status = 0;
      for (var index in FarmerData) {
        if (
          Username === FarmerData[index]['Username'] &&
          Password === FarmerData[index]['Password']
        ) {
          inputVal.Name = FarmerData[index]['Name'];
          status++;
        }
      }
      if (status === 1) {
        alert('Login Success');
        navigate('/farmerHome');
      } else {
        alert('Invalid Credentials');
      }
    } else {
      const Username = document.getElementById('username').value;
      const Password = document.getElementById('password').value;
      var status = 0;
      for (var index in OwnerData) {
        if (
          Username === OwnerData[index]['Username'] &&
          Password === OwnerData[index]['Password']
        ) {
          inputVal.Name = OwnerData[index]['Name'];
          status++;
        }
      }
      if (status === 1) {
        select.checkLoginStatus = status;
        alert('Login Success');
        navigate('/ownerHome');
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  function ToRegister() {
    navigate('/register');
  }

  return (
    <div className="LoginContainer">
      <div className="Duplicate">
        <Navbar checkstatus={inputVal.loginstatus} />
      </div>
      <div className="App">
        <div className="cover  mt-5">
          <section>
            <h3>Login</h3>
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

              <Form.Group className="mb-3 lg-2">
                <Form.Control
                  type="text"
                  name="username"
                  id="username"
                  onChange={getData}
                  placeholder="Username"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  name="password"
                  id="password"
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
