import Axios from "axios";

export function NewWPClient(baseURL = process.env.BASE_URL) {
  return Axios.create({
    baseURL,
  });
}
