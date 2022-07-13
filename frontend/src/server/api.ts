import axios from "axios";

const api = axios.create({
  baseURL: "https://django-klutch-tech.herokuapp.com",
});

export default api;
