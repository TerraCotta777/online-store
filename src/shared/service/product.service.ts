import { Product } from "../../entities/product/types";
import api from "../api";
import endpoints from "../api/endpoints"

type Response = {
    data: Product[];
    error: any;
}

export default {
    getProducts() {
        const url = endpoints().product.get_products;
        return api.get<Response>(url)
    },
    getProductById(product_id: number) {
        const url = endpoints().product.get_product(product_id);
        return api.get(url)
    }
}