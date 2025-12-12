import { useState } from 'react';
import client from '../api/client';

function AdminPage() {
  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      await client.post('/sweets', {
        name: form.name,
        category: form.category,
        price: Number(form.price),
        quantity: Number(form.quantity),
      });
      setMessage('Sweet created');
      setForm({ name: '', category: '', price: '', quantity: '' });
    } catch {
      setMessage('Error creating sweet');
    }
  };

  return (
    <div>
      <h1>Admin - Manage Sweets</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="quantity"
          placeholder="Quantity"
          value={form.quantity}
          onChange={handleChange}
        />
        <button type="submit">Create Sweet</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AdminPage;
