function SweetList({ sweets, onPurchase }) {
  return (
    <div>
      {sweets.map((s) => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>{s.category} - ₹{s.price}</p>
          <p>Qty: {s.quantity}</p>
          <button
            onClick={() => onPurchase(s.id)}
            disabled={s.quantity === 0}
          >
            Purchase
          </button>
        </div>
      ))}
    </div>
  );
}

export default SweetList;
