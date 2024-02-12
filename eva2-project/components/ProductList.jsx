import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ProductList = () => {
  const [productsFromApi, addProductsFromApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        addProductsFromApi(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // const navigate = useNavigate();
  const [activeProduct, setActiveProduct] = useState();

  const handleProductButtonClick = (product) => {
    setActiveProduct(product);
  };
  const handleModalClose = () => {
    setActiveProduct(undefined);
  };

  if (isLoading) {
    return <div>Palaukite truputėlį</div>;
  }
  return (
    <>
      <Container>
        <Row>
          {productsFromApi.map((item) => (
            <Col key={item.id} md={3} className="mb-4 mt-4">
              <Product
                id={item.id}
                title={item.title}
                description={item.description}
                discount={item.discount}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                onProductButtonClick={handleProductButtonClick}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={activeProduct}>
        <Modal.Header closeButton>
          <Modal.Title>Jūsų krepšelis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Jūsų krepšelyje: {activeProduct?.title}, turimas kiekis: {activeProduct?.quantity}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Tęsti apsipirkimą
          </Button>
          <Button variant="primary">Eiti į krepšelį</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
