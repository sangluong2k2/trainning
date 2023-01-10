import { Box, makeStyles, Typography } from "@material-ui/core"
import React from "react"

const colors = {
  initial: ["lightcyan", "skyblue"],
}

export const PageTitle = ({ title, gradientType, titleBackground }) => {
  const classes = useStyles({ colors: colors[gradientType], titleBackground })

  return (
    <Box className={classes.root} style={{background: titleBackground}}>
      <Box className={classes.wrapper} pt={1.75} pb={1.5} mx="auto" my={0}>
        <Typography variant="h1" className={classes.title}>{title}</Typography>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles({
  root: {
    padding: "20px 0",
    marginBottom: "20px"
  },
  wrapper: {
    maxWidth: 1000,
    width: "100%",
  },
  title: {
    margin: "0 30px",
  },
})
