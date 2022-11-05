import axios from "axios";
import { serverAxios } from "./axios";

export const fetcher = (url) =>
  serverAxios.get(process.env.NEXT_PUBLIC_SERVER_URL + url).then((res) => res.data);
