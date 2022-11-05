import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

function useAlcohols(types, keyword) {
  console.log("use:" + types);
  const typeQuery = types?.reduce((prev, cur) => `${prev}&type=${cur}`, "").slice(1);
  const query = keyword ? `${typeQuery}&keyword=${keyword}` : typeQuery;

  const { data, error } = useSWR(query ? `/alcohols?${query}` : null, fetcher);

  return {
    data,
    error,
    loading: !data && !error,
  };
}

export default useAlcohols;
