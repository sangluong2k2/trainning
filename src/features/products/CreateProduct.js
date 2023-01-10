/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input, InputLabel } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router";
import {
  clearData,
  createOrUpdateProductAsync,
  getProductDetailAsync,
  setFormValueProduct
} from "./slices";

const defaultValue = {
  name: {
    label: "Name",
    type: "text",
    id: "name",
    value: "",
  },
  brand: {
    label: "Brand",
    type: "text",
    id: "brand",
    value: "",
  },
  madein: {
    label: "Made In",
    type: "text",
    id: "madein",
    value: "",
  },
  price: {
    label: "Price",
    type: "text",
    id: "price",
    value: "",
  },
};

const CreateProduct = (props) => {
  const theme = useTheme();
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const { name, brand, madein, price, hasError, productDetail } = useSelector(
    (state) => state.product
  );
  const navigate = useNavigate();
  const { id } = useParams();
  const [formValue, setFormValue] = useState(defaultValue);
  let formContents = {
    name: {
      label: "Name",
      type: "text",
      id: "name",
      value: name,
    },
    brand: {
      label: "Brand",
      type: "text",
      id: "brand",
      value: brand,
    },
    madein: {
      label: "Made In",
      type: "text",
      id: "madein",
      value: madein,
    },
    price: {
      label: "Price",
      type: "text",
      id: "price",
      value: price,
    },
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailAsync(id));
    } else {
      dispatch(clearData());
    }
  }, []);

  const dispatchSetFormValue = (event) => {
    const { name, value } = event.target;
    dispatch(setFormValueProduct({ name, value }));
  };

  const handleSubmit = async () => {
    let params = {};
    Object.keys(formContents).map((data, i) => {
      params = { ...params, [data]: formContents[data].value };
    });
    if (id) {
      params.id = id;
    } else delete params.id;
    await dispatch(createOrUpdateProductAsync(params));
    if (!hasError) {
      navigate(routes.product.path);
      setFormValue(null);
    }
  };

  const redirectListProduct = () => {
    navigate(routes.product.path)
  }

  return (
    <Box className={classes.root} display="flex" flexDirection="column">
      <Box
        bgcolor={theme.palette.offWhite.main}
        color={[theme.palette.text?.primary]}
        pt={7.5}
        pb={8.75}
        textAlign="center"
        flex={1}
      >
        <Box
          bgcolor={theme.palette.white}
          py={5}
          my={0}
          mx="auto"
          mb={3.75}
          maxWidth={750}
          w={1}
        >
          <Box mx="auto" my={0} w={1} maxWidth={505}>
            <form onSubmit={handleSubmit}>
              <Box pb={3.75}>
                {Object.keys(formContents).map((key) => {
                  return (
                    <Box
                      className={classes.item}
                      display="flex"
                      alignItems="center"
                      key={key}
                    >
                      <Box
                        flexGrow={0}
                        textAlign="center"
                        className={classes.title}
                      >
                        <InputLabel className={classes.label} htmlFor={key}>
                          {formContents[key].label}
                        </InputLabel>
                      </Box>
                      <Box
                        flex="grow3"
                        flexGrow={1}
                        position="relative"
                        border={1}
                        borderColor={theme.palette.lightGray.dark}
                        ml="auto"
                        mr={0}
                        w={1}
                        className={classes.input}
                      >
                        <Input
                          disableUnderline={true}
                          fullWidth={true}
                          type={formContents[key].type}
                          id={formContents[key].id}
                          value={formContents[key].value}
                          name={key}
                          onChange={dispatchSetFormValue}
                          required
                          className={classes.inputValue}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="product-detail-button">
                <Button onClick={redirectListProduct} className="button-action">
                  List Product
                </Button>
                {id ? (
                  <Button onClick={handleSubmit} className="button-action">
                    Edit Product
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} className="button-action">
                    Create Product
                  </Button>
                )}
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateProduct;

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: "100%",
    },
    title: {
      width: 100,
    },
    item: {
      display: "flex",
      alignItems: "center",
      margin: 20,
    },
    input: {
      width: "100%",
      border: "1px solid",
    },
    inputValue: {
      padding: "6px 5px !important",
    },
  };
});
