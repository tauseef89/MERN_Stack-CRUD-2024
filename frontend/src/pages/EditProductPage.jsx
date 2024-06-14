import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

function EditProductPage({ updateProductSubmit }) {
  const product = useLoaderData();
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [details, setDetails] = useState(product.details);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();
    const updatedProduct = {
      id,
      title,
      price,
      image,
      details,
    };
    updateProductSubmit(updatedProduct);
    return navigate(`/products/${id}`);
  };
  return (
    <section className="form-sec">
      <form onSubmit={submitForm}>
        <h2>Update Product</h2>
        <div className="input-wrap">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="details">Details</label>
          <input
            type="text"
            id="details"
            name="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
    </section>
  );
}
export default EditProductPage;
