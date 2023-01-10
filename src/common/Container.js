import { Box, makeStyles } from "@material-ui/core"
const headerHeight = 81.97
const menuButtonHeight = 60
const titleAreaHeight = 89.34
const footerHeight = 33.16

const includesTitleHeight =
  headerHeight + menuButtonHeight + titleAreaHeight + footerHeight
const notIncludesTitleHeight = headerHeight + menuButtonHeight + footerHeight

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    width: "1200px",
    minHeight: (props) => `calc(100vh - ${props.minHeight}px)`,
  },
})

export const Container = (props) => {
  const includesTitle = !!props.title
  const styleProps = {
    minHeight: includesTitle ? includesTitleHeight : notIncludesTitleHeight,
  }
  const classes = useStyles(styleProps)

  return <Box className={classes.root}>{props.children}</Box>
}
