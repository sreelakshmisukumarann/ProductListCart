import axios from 'axios'
import {BASE_URL} from './baseURL'

export const displayProduct = () => axios.get(`${BASE_URL}/product/getProductlist`)

export const addToCartAPI = (cartItem) => {
  return axios.post(`${BASE_URL}/cart/addcart`, cartItem);
};

export const getCartItemApI = () => axios.get(`${BASE_URL}/cart/getcart`)
export const removeCartItemApi = (id) => axios.delete(`${BASE_URL}/cart/delete/${id}`);