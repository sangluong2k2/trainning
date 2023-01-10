import React, { useEffect } from "react";

import { Button, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetailAsync } from "./slices";

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector((state) => state.product);
  const { productDetail } = product;

  useEffect(() => {
    dispatch(getProductDetailAsync(id));
  }, [dispatch, id]);

  return (
    <Box className="product-detail">
      <Box>
        <Box className="product-detail-content">
          <Typography className="product-detail-item">Name:</Typography>
          <Typography>{productDetail?.name || ""}</Typography>
        </Box>
        <Box className="product-detail-content">
          <Typography className="product-detail-item">Brand:</Typography>
          <Typography>{productDetail?.brand || ""}</Typography>
        </Box>
        <Box className="product-detail-content">
          <Typography className="product-detail-item">Made In:</Typography>
          <Typography>{productDetail?.madein || ""}</Typography>
        </Box>
        <Box className="product-detail-content">
          <Typography className="product-detail-item">Price:</Typography>
          <Typography>{productDetail?.price || ""}</Typography>
        </Box>
      </Box>
      <Box mt={3} className="product-detail-button">
        <Button className="button-action">Edit</Button>
        <Button className="button-action">Delete</Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;
