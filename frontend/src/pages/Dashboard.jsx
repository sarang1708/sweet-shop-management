import { useEffect, useState } from 'react';
import client from '../api/client';
import SweetList from '../components/SweetList';

function Dashboard() {
  const [sweets, setSweets] = useState([]);

  useEffect(() => {
    const fetchSweets = async () => {
      const res = await client.get('/sweets');
      setSweets(res.data);
    };
    fetchSweets();
  }, []);

  const handlePurchase = async (id) => {
    await client.post(`/sweets/${id}/purchase`);
    const res = await client.get('/sweets');
    setSweets(res.data);
  };

  return (
    <div>
      <h1>Sweet Shop Dashboard</h1>
      <SweetList sweets={sweets} onPurchase={handlePurchase} />
    </div>
  );
}

export default Dashboard;
