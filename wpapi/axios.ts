import Axios from "axios";

const baseURL = process.env.WP_BASE_URL;

export default Axios.create({
  baseURL,
});
