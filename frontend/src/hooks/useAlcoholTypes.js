import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

function useAlcoholTypes() {
  const { data, error } = useSWR("/alcohols/types", fetcher);

  return {
    data,
    error,
    loading: !data && !error,
  };
}

export default useAlcoholTypes;
