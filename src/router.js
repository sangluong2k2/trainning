import CreateProduct from "./features/products/CreateProduct";
import ListProduct from "./features/products/ListProduct";
import ProductDetail from "./features/products/ProductDetail";
import TopPage from "./features/top/TopPage";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  top: {
    exact: false,
    path: "/",
    component: (props) => injectProps(props, TopPage),
    title: "Top Page",
    titleBackground: "linear-gradient(to right, #E5F6FC 60%, #A6DFF4)",
  },
  product: {
    exact: false,
    path: "/product-list",
    component: (props) => injectProps(props, ListProduct),
    title: "Product List",
    titleBackground: "linear-gradient(to right, #E5F6FC -20% , #A6DFF4)",
  },
  productDetail: {
    exact: false,
    path: "/product/:id",
    component: (props) => injectProps(props, ProductDetail),
    title: "Product Detail",
    titleBackground: "linear-gradient(to right, #E5F7F8 60% , #A6E3E7)",
  },
  createProduct: {
    exact: false,
    path: "/product-create",
    component: (props) => injectProps(props, CreateProduct),
    title: "Create Product",
    titleBackground: "linear-gradient(to right, #E5F7F8 20% , #A6E3E7)",
  },
  editProduct: {
    exact: false,
    path: "/product-edit/:id",
    component: (props) => injectProps(props, CreateProduct),
    title: "Edit Product",
    titleBackground: "linear-gradient(to right, #EFF0F7 20% , #C8CCE4)",
  },
};
