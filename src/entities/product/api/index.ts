import { alertError } from "../../../shared/api/error";
import { isOKResponse } from "../../../shared/helpers";
import productService from "../../../shared/service/product.service";

export const getProducts = async () => {
  try {
    const res = await productService.getProducts();
    if (isOKResponse(res)) return res.data.data;
  } catch (err) {
    alertError(err);
  }
};

export const getProductById = async (product_id: number) => {
  try {
    const res = await productService.getProductById(product_id);
    if (isOKResponse(res)) return res.data.data;
  } catch (err) {
    alertError(err);
  }
};
