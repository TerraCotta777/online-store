import api from "../../shared/api";
import endpoints from "../api/endpoints"

export default {
    createOrder() {
        const url = endpoints().order.create_order;
        return api.post(url)
    }
}