import { useQuery } from "react-query";
import { getCart } from "../api";

export const cartQueryKey = "cart";

export const useGetCart = () => {
  return {
    ...useQuery([cartQueryKey], () => getCart()),
  };
};
