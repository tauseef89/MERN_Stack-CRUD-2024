import Product from "../model/Product.js";

// Get All products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Single product
const product_details = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Add New product
const product_create = async (req, res) => {
  const { title, price, image, details } = req.body;
  const product = new Product({
    title,
    price,
    image,
    details,
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

// Update product
const product_update = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

// Delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(removeProduct);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export {
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
};
