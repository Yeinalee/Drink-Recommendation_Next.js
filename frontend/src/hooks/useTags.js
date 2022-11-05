import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

function useTags() {
  const { data, error } = useSWR("/tags", fetcher);
  return {
    data,
    error,
    loading: !data && !error,
  };
}

export default useTags;
