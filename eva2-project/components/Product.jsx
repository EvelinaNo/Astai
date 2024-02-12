import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Product = (product) => {
  const { id, image, title, description, price, discount, onProductButtonClick } = product;

  const navigate = useNavigate();

  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <div>Palaukite truputėlį</div>;
  // }
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
          <Button onClick={() => onProductButtonClick(product)} variant="light">
            Į krepšelį
          </Button>
          <Button onClick={() => navigate(`/product/${id}`)} variant="light">
            Žiūrėti
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
