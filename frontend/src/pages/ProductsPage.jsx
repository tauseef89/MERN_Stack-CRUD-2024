import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = "http://localhost:9000/api/products/";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <section>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <p>{product.title}</p>
              <p>₹ {product.price}</p>
              <Link to={`/products/${product._id}`}>Read more</Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsPage;
