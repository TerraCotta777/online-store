import cartService from "../../../shared/service/cart.service";
import { alertError } from "../../../shared/api/error";
import { isOKResponse } from "../../../shared/helpers";
import { CartUpdateDTO } from "../types";

export const getCart = async () => {
  try {
    const res = await cartService.getCart();
    if (isOKResponse(res)) {
      const cart = res.data.data;
      localStorage.setItem("cart", JSON.stringify(cart));
      return res.data.data;
    }
  } catch (err) {
    alertError(err);
  }
};

export const updateCart = async (updatedItem: CartUpdateDTO) => {
  try {
    const res = await cartService.updateCart(updatedItem);
    if (isOKResponse(res)) return res.data.data;
  } catch (err) {
    alertError(err);
  }
};

export const deleteCart = async () => {
  try {
    const res = await cartService.deleteCart();
    if (isOKResponse(res)) return res.data.data;
  } catch (err) {
    alertError(err);
  }
};
