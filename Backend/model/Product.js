import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: String,
  price: String,
  image: String,
  details: String,
});

const Product = model("Product", productSchema);

export default Product;
