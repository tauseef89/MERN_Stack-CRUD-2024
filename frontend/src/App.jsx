import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddProductPage from "./pages/AddProductPage";
import ProductDetailsPage, { productLoader } from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  // Add New product
  const addProduct = async (newProduct) => {
    const res = await fetch("http://localhost:9000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    return;
  };

  // update product
  const updateProduct = async (product) => {
    const res = await fetch(
      `http://localhost:9000/api/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    return;
  };

  // Delete Product
  const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:9000/api/products/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/add-product"
          element={<AddProductPage addProductSubmit={addProduct} />}
        />
        <Route
          path="/edit-product/:id"
          element={<EditProductPage updateProductSubmit={updateProduct} />}
          loader={productLoader}
        />
        <Route
          path="/products/:id"
          element={<ProductDetailsPage deleteProduct={deleteProduct} />}
          loader={productLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
