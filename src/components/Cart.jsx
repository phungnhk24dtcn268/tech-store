const Cart = ({ cartItems }) => (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - {item.price}₫</li>
        ))}
      </ul>
    </div>
  );
  
  export default Cart;
  