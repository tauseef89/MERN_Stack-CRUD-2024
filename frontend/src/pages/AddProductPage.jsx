import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProductPage({ addProductSubmit }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      image,
      details,
    };
    addProductSubmit(newProduct);
    return navigate("/products");
  };
  return (
    <section className="form-sec">
      <form onSubmit={submitForm}>
        <h2>Add Product</h2>
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
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}
export default AddProductPage;
