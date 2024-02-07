import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';

const Product = (props) => {
    const { product, onProductButtonClick } = props;

    const { image, title, description, price, discount, quantity } = product;
  

    return (
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title>
          {discount && discount > 0 ? (
            <img src="../src/assets/images/sale.png" alt="product"></img>
          ) : (
            <img src="../src/assets/images/new.png" alt="product"></img>
          )}{' '}
          {price} €
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={() => onProductButtonClick(product)} variant="light">Į krepšelį</Button>
      </Card.Body>
    </Card>
    </>
  );
};

export default Product;
