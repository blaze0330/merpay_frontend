import axios from "axios";

const SERVER_URL = `http://localhost:8000`;

export const category = () => {
  return axios.get(`${SERVER_URL}/categories`);
};

export const getItemsList = () => {
  return axios.get(`${SERVER_URL}/items`);
};

export const getItem = (id?: number) => {
  return axios.get(`${SERVER_URL}/items/${id}`);
};
