import axios from "axios";
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';

export const AddNewProduct = () => {
const [form, setForm] = useState({
title: '',
description: '',
image: '',
price: ''
});
const handleForm = (e) => {
    setForm( (prevFormData) => ( { ...prevFormData, [e.target.name]: e.target.value } ) )

}
const [showToast, setShowToast] = useState(false);


const handleSubmitForm = (e) => {
    e.preventDefault();
   
    axios 
    .post('https://fakestoreapi.com/products/', form)
    .then (res => {console.log(res);
    setShowToast(true);
    })
    .catch(err => console.log(err))
    
    
}

    return (
        <>
        <form onSubmit={handleSubmitForm}> 
            Pridėti naują prekę: 
                <input type="text" name="title" value={form.title} placeholder="Įvesk prekės pavadinimą..." onChange={handleForm}/>
                <input type="text" name="description" value={form.description} placeholder="Įvesk prekės aprašymą..." onChange={handleForm}/>
                <input type="name" name="image" value={form.image} placeholder="Įvesk prekės nuotraukos url adresą..." onChange={handleForm}/>
                <input type="number" name="price" value={form.price} placeholder="Įvesk prekės kainą..." onChange={handleForm}/>
                <button type="submit">Pridėti</button>
        </form>
        <Toast show={showToast}onClose={ () => setShowToast(false) }>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Puiku! Pridėta!</strong>
    </Toast.Header>
    <Toast.Body>Pridėjai prekę: {form.title}, kurios kaina {form.price}</Toast.Body>
  </Toast>
        </>
    )
}