import express from "express";

const router = express.Router();
import {
  product_all,
  product_details,
  product_create,
  product_update,
  product_delete,
} from "../controllers/productController.js";

router.post("/", product_create);
router.get("/", product_all);
router.get("/:id", product_details);
router.put("/:id", product_update);
router.delete("/:id", product_delete);

export default router;
