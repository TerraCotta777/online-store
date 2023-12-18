import { CartUpdateDTO } from './../../entities/cart/types/index';
import { Cart } from "entities/cart/types";
import api from "../api";
import endpoints from "../api/endpoints"

type Response = {
    data: Cart;
    error: any;
}

export default {
    getCart() {
        const url = endpoints().cart.get_cart;
        return api.get<Response>(url)
    },
    updateCart(data: CartUpdateDTO) {
        const url = endpoints().cart.update_cart;
        return api.put(url, data)
    },
    deleteCart() {
        const url = endpoints().cart.delete_cart;
        return api.delete(url)
    },
}