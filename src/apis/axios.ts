import axios from "axios";
import { parse, stringify } from "qs";

export const kobacoAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  paramsSerializer: (params) => {
    return stringify(params, { arrayFormat: "brackets" });
  },
});
