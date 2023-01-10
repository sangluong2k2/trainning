import React, { useCallback } from "react";

import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router";

const TopPage = (props) => {
  const classes = useStyles(props);
  const navigate = useNavigate();

  const redirectCreateProduct = useCallback(() => {
    navigate(routes.createProduct.path);
  }, []);

  const redirectListProduct = useCallback(() => {
    navigate(routes.product.path);
  }, []);

  return (
    <>
      <Box mt={3} className={classes.buttonCreateProduct}>
        <Button className="button-action" onClick={redirectListProduct}>
          List Product
        </Button>
        <Button className="button-action" onClick={redirectCreateProduct}>
          Create Product
        </Button>
      </Box>
    </>
  );
};

export default TopPage;

const useStyles = makeStyles((theme) => {
  return {
    buttonCreateProduct: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 20,
    },
  };
});
