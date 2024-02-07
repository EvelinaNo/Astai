import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import products from '../src/data/product';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';


export const ProductList = () => {

    const [activeProduct, setActiveProduct] = useState();

    const handleProductButtonClick = (product) => {
        setActiveProduct(product);
    };
    const handleModalClose = () => {
        setActiveProduct(undefined);
    };
    // const [showToast, setShowToast] = useState(false);
  
    
    // const handleCloseToast = () => setShowToast(false);
    // const handleShowToast = () => setShowToast(true);
  
  return (
    <>
    <Container>
      <Row>
      {products.map((item) => (
        <Col key={item.id} md={3} className="mb-4 mt-4">
        <Product title={item.title} description={item.description} discount={item.discount} image={item.image} price={item.price} quantity={item.quantity} onProductButtonClick={handleProductButtonClick} />
        </Col>
      ))}
   </Row>
    </Container>
    <Modal show={activeProduct}>
    <Modal.Header closeButton>
      <Modal.Title>Jūsų krepšelis</Modal.Title>
    </Modal.Header>
    <Modal.Body>Jūsų krepšelyje: {activeProduct?.title}, {activeProduct?.description}, turimas kiekis: {activeProduct?.quantity}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModalClose}>
     Uždaryti
      </Button>
      <Button variant="primary">
     Įdėti į krepšelį
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  );
};
