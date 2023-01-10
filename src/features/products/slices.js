/* eslint-disable array-callback-return */
import { createAsyncThunk, createSlice } from "../../toolkit";
import {
  createOrUpdateProduct,
  deleteProduct,
  getListProduct,
  getProductDetail,
} from "./api";

const initialState = {
  listProduct: [],
  hasError: false,
  productDetail: {},
  name: "",
  brand: "",
  madein: "",
  price: "",
};

export const getListProductAsync = createAsyncThunk(
  "product/getListProduct",
  async () => {
    const response = await getListProduct();
    return response.data;
  }
);

export const getProductDetailAsync = createAsyncThunk(
  "product/getProductDetailAsync",
  async (id) => {
    const response = await getProductDetail(id);
    return response.data;
  }
);

export const createOrUpdateProductAsync = createAsyncThunk(
  "product/createOrUpdateProductAsync",
  async (id) => {
    const response = await createOrUpdateProduct(id);
    return response.data;
  }
);

export const deleteProductAsync = createAsyncThunk(
  "product/deleteProductAsync",
  async (id) => {
    const response = await deleteProduct(id);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFormValueProduct: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearData: (state, action) => {
      state.name = "";
      state.brand = "";
      state.madein = "";
      state.price = "";
      state.productDetail = {}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListProductAsync.pending, (state) => {})
      .addCase(getListProductAsync.fulfilled, (state, action) => {
        state.listProduct = action.payload;
        state.hasError = false;
      })
      .addCase(getListProductAsync.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(getProductDetailAsync.pending, (state) => {})
      .addCase(getProductDetailAsync.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.hasError = false;
        state.name = state.productDetail.name;
        state.brand = state.productDetail.brand;
        state.madein = state.productDetail.madein;
        state.price = state.productDetail.price;
      })
      .addCase(getProductDetailAsync.rejected, (state) => {
        state.hasError = true;
      })
      .addCase(deleteProductAsync.pending, (state) => {})
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.hasError = false;
      })
      .addCase(deleteProductAsync.rejected, (state) => {
        state.hasError = true;
      });
  },
});

export const { setFormValueProduct, clearData } = productSlice.actions;

export default productSlice.reducer;
