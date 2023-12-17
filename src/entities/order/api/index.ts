import { alertError } from "../../../shared/api/error";
import { isOKResponse } from "../../../shared/helpers";
import orderService from "../../../shared/service/order.service";

export const createOrder = async () => {
    try {
      const res = await orderService.createOrder();
      if (isOKResponse(res)) return res.data.data;
    } catch (err) {
      alertError(err);
    }
  };