import { Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { Container } from "./Container";
import { PageTitle } from "./PageTitle";

export const Layout = ({
  title,
  gradientType = "initial",
  titleBackground,
  children,
  ...rest
}) => {
  const theme = useTheme();

  const bgColor = [theme.palette.offWhite?.main];

  return (
    <>
      {title && (
        <PageTitle
          title={title}
          gradientType={gradientType}
          titleBackground={titleBackground}
        />
      )}
      <Box {...rest} bgcolor={bgColor} width={1}>
        <Container title={title}>{children}</Container>
      </Box>
    </>
  );
};
