import Axios from "axios";

export function NewWPClient(baseURL = process.env.WP_BASE_URL) {
  return Axios.create({
    baseURL,
  });
}
