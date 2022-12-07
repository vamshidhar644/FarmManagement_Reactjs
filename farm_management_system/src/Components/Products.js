import React, { useState } from 'react';
import '../Styles/Service.css';
import { useNavigate } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import ''

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }
  callAPI() {
    fetch('http://localhost:3001/getProducts/')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          list: data.data,
        });
      });
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      return (
        <Card border="success" style={{ width: '18rem' }} className="CardBox">
          <Card.Header className='ProductImage'>
            <img src= {process.env.PUBLIC_URL+"/Assets/"+item.ImageUrl} alt="test" />
          </Card.Header>
          <Card.Body className="CardBody">
            <Card.Title className='ProductTitle'>{item.ProductName}</Card.Title>
            <Card.Text className='ProductPrice'>Rs.{item.ProductPrice}</Card.Text><hr/>
            <Card.Text className='ProductCategory'>{item.ProductType}</Card.Text>
            <Card.Text className='ProductDesc'>{item.ProductDesc}</Card.Text>
          </Card.Body>
        </Card>
      );
    });

    return (
      <div className="Products-main-container">
        <h1>Our Products</h1>
        <div className="Product-view">{tb_data}</div>
        <br />
        <Buttons />
      </div>
    );
  }
}
export default Products;

function Buttons() {
  const navigate = useNavigate();
  function AddProduct() {
    navigate('/addproduct');
  }
  function ToFarmerHome() {
    navigate('/farmerHome');
  }
  return (
    <div>
      <Form.Group as={Row} className="mb-4">
        <Col sm={{ span: 10 }} className="AddButtons">
          <Button type="submit" onClick={AddProduct}>
            Add Products
          </Button>
            <Button type="submit" onClick={ToFarmerHome}>
              Back to Home
            </Button>
        </Col>
      </Form.Group>
    </div>
  );
}
