import { fetcher } from "../utils/fetcher";
import useSWR from "swr";

function useAlcoholsWithoutQuery() {
  const { data, error } = useSWR("/alcohols", fetcher);

  return {
    data,
    error,
    loading: !data && !error,
  };
}

export default useAlcoholsWithoutQuery;
