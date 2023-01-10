import axios from "../axios"

export const getListProduct = async () => {
  return await axios.get("/api/products/")
}

export const getProductDetail = async (id) => {
  return await axios.get(`/api/findProduct/${id}`)
}

export const createOrUpdateProduct = async (params) => {
  return await axios.post("/api/saveProduct", params)
}

export const deleteProduct = async (id) => {
  return await axios.delete(`/api/deleteProduct/${id}`)
}