import productReducer from "./features/products/slices";
import { configureStore } from "./features/toolkit";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
