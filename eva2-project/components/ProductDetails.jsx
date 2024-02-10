import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const ProductDetails = () => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setOneProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

//   if (!oneProduct) {
//     return <div>Loading...</div>
//   }

  return (
    <>
      <div>
        Prekė:
        <h3>{oneProduct.title}</h3>
        Aprašymas:
        <p>{oneProduct.description}</p>
        <div>{oneProduct.image}</div>
      </div>
    </>
  );
};
