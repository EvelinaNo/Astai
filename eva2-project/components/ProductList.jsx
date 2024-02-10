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

const [oneProductFromApi, addOneProductFromApi] = useState([]);

useEffect( () => {
  axios
  .get('https://fakestoreapi.com/products/1')
  .then( (res)  => {
    addOneProductFromApi(res.data);
    setIsLoading(false);
  })
.catch( (err) => console.log(err) );
}, []);

useEffect( () => {
    axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
    addProductsFromApi(response.data);
   setIsLoading(false);
})
    .catch((error) => console.log(error));
}, []);

const navigate = useNavigate();

const openZiuretiClick = (oneProductFromApi) => {
    navigate(`/product/${oneProductFromApi.id}`)
}

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
      {(productsFromApi).map((product) => (
        <Col key={product.id} md={3} className="mb-4 mt-4">
        <Product title={product.title}
         description={product.description} 
         discount={product.discount} 
         image={product.image} 
         price={product.price} 
         quantity={product.quantity} 
         onProductButtonClick={handleProductButtonClick}
         onZiuretiClick={openZiuretiClick} />
        </Col>
      ))}
   </Row>
    </Container>
    <Modal show={activeProduct}>
    <Modal.Header closeButton>
      <Modal.Title>Jūsų krepšelis</Modal.Title>
    </Modal.Header>
    <Modal.Body>Jūsų krepšelyje: {activeProduct?.title}, turimas kiekis: {activeProduct?.quantity}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleModalClose}>
     Tęsti apsipirkimą
      </Button>
      <Button variant="primary">
     Eiti į krepšelį
      </Button>
    </Modal.Footer>
  </Modal>
    </>
  );
};
