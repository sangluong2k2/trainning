import React, { useEffect } from "react";

import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";
import column from "./column.json";
import { deleteProductAsync, getListProductAsync } from "./slices";

const ListProduct = (props) => {
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { listProduct, hasError } = product;
  const headers = column.header;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getListProductAsync());
  }, [dispatch]);

  const handleEditProduct = (productId) => {
    navigate(`/product-edit/${productId}`);
  };

  const handleCreateProduct = () => {
    navigate(routes.createProduct.path);
  };

  const handleDeleteProduct = async (id) => {
    await dispatch(deleteProductAsync(id));
    if (!hasError) {
      await dispatch(getListProductAsync());
    }
  };

  const redirectProductDetail = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <>
      <Box mt={3} className={classes.buttonCreateProduct}>
        <Button className="button-action" onClick={handleCreateProduct}>
          Create Product
        </Button>
      </Box>
      <Box className={classes.root} display="flex" flexDirection="column">
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              {Object.keys(headers).map((key, i) => {
                return (
                  <TableCell key={i} align="center">
                    {headers[key].title}
                  </TableCell>
                );
              })}
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listProduct?.length > 0 ? (
              listProduct.map((row, i) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" align="center">
                    {i + 1}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.madein}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>
                    <span
                      className={`${classes.editProduct} pointer link`}
                      onClick={() => handleEditProduct(row.id)}
                    >
                      Edit
                    </span>
                    <span
                      className={`${classes.editProduct} pointer link`}
                      onClick={() => handleDeleteProduct(row.id)}
                    >
                      Delete
                    </span>
                    <span
                      className="pointer link"
                      onClick={() => redirectProductDetail(row.id)}
                    >
                      Detail
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No data...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default ListProduct;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: "24px",
      fontWeight: "bold",
    },
    editProduct: {
      marginRight: 10,
    },
    buttonCreateProduct: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 20,
    },
  };
});
