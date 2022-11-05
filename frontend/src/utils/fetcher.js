import axios from "axios";

export const fetcher = (url) =>
  axios.get(process.env.NEXT_PUBLIC_SERVER_URL + url).then((res) => res.data);
