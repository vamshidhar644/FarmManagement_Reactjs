import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

import '../Styles/AddProduct.css';
const AddProducts = () => {
  
  const navigate = useNavigate();
  function ToOwnerHome() {
    navigate('/ownerHome');
  }

  function ToProducts() {
    navigate('/services');
  }
  const [inputVal, setInputValue] = useState({
    name: '',
    price: '',
    description: '',
    type: '',
  });
  
	const [selectedFile, setSelectedFile] = useState();

  const { name, price, description, type, imageUrl } = inputVal;

  const onInputChange = (e) => {
    setInputValue({ ...inputVal, [e.target.name]: e.target.value });
    setSelectedFile(e.target.files[0].name);

  };


  // console.log(selectedFile);

  const [select, setSelection] = useState({
    option: '',
  });

  const radioChange = (e) => {
    setSelection({ ...select, [e.target.name]: e.target.value });
  };

  // console.log(select.formHorizontalRadios);
  inputVal.type = select.formHorizontalRadios;
  inputVal.imageUrl = selectedFile;

  // console.log(inputVal.imageUrl)
  const AddProduct = (e) => {
    e.preventDefault();

    if (name !== '') {
      if (price !== '') {
        if (description !== '') {
          if (select.formHorizontalRadios !== undefined) {
            if (imageUrl !== '') {
              axios({
                url: 'http://localhost:3001/AddProduct',
                method: 'POST',
                data: inputVal,
              }).then((response) => {
                console.log(response.data.user);
              });

              alert('Success');
            } else {
              alert('Select an Image');
            }
          } else {
            alert('Select the Product type');
          }
        } else {
          alert('Enter the description of product');
        }
      } else {
        alert('Enter the price');
      }
    } else {
      alert('Name is Required');
    }
  };

  return (
    <div className="AddContainer">
      <div className="AddHeader">
        <h1>Add Products</h1>
      </div>
      <Form className="AddBody">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Product name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => onInputChange(e)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              name="price"
              onChange={(e) => onInputChange(e)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              name="description"
              onChange={(e) => onInputChange(e)}
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>
              Product Type
            </Form.Label>
            <Col sm={10} className="ProductType">
              <Form.Check
                type="radio"
                label="Insecticides"
                value="Insecticides"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                onChange={(e) => radioChange(e)}
              />
              <Form.Check
                type="radio"
                label="Pesticides"
                value="Pesticides"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                onChange={(e) => radioChange(e)}
              />
              <Form.Check
                type="radio"
                label="Seeds"
                value="Seeds"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                onChange={(e) => radioChange(e)}
              />
              <Form.Check
                type="radio"
                label="Fertilizers"
                value="Fertilizers"
                name="formHorizontalRadios"
                id="formHorizontalRadios4"
                onChange={(e) => radioChange(e)}
              />
              <Form.Check
                type="radio"
                label="Manure"
                value="Manure"
                name="formHorizontalRadios"
                id="formHorizontalRadios5"
                onChange={(e) => radioChange(e)}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Image
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              id="upload"
              name="imageUrl"
              
              onChange={(e) => onInputChange(e)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Col sm={{ span: 10, offset: 2 }} className="AddButtons">
            <Button type="submit" onClick={AddProduct}>
              Add
            </Button>
            <Button type="submit" onClick={ToProducts}>
              Products
            </Button>
            <Button type="submit" onClick={ToOwnerHome}>
              Back
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddProducts;
