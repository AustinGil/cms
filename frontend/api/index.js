import axios from "axios";

export default {
  auth: {
    me: () => axios.get("auth/me"),
    login: data => axios.post("auth/login", data),
    register: data => axios.post("auth/register", data)
  }
};
