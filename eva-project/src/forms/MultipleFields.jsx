import { useState } from "react"

export const MultipleFields = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleForm = (event) => {
setForm((prevState) => ({...prevState, [event.target.name]: event.target.value}))
if (event.target.name === "name" && event.target.value.length < 2) {
    setErrorMessage('Blogai');
} else {
    setErrorMessage('');
}
    }

    const handleFormSubmit = (e) => {
e.preventDefault();
alert(`Form submitted for user ${form.name}`);
    }

    return (
        <>
        MultipleFields
        <form onSubmit={handleFormSubmit}>
            <label>Name:
                <input type="text" name="name" value={form.name} onChange={handleForm}/>
                <p>{errorMessage}</p>
            </label>
            <label>Email:
                <input type="email" name="email" value={form.email} onChange={handleForm}/>
            </label>
            <label>Message:
              <textarea name="message" value={form.message} onChange={handleForm}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        <p>Name: {form.name}, email:{form.email}</p>
        </>
    )
}