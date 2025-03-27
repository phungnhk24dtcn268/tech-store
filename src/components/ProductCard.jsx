const ProductCard = ({ product, addToCart }) => (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Giá: {product.price}₫</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
  
  export default ProductCard;
  