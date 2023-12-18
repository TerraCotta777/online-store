import { useQuery } from "react-query";
import { getProducts } from "../api";

export const useGetProducts = () => {
  const queryKey = "products";

  return {
    ...useQuery([queryKey], () => getProducts()),
    queryKey,
  };
};
