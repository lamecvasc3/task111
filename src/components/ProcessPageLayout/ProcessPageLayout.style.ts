import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

const padding = 16;

interface StylesProps {
  footerPosition?: "relative" | "fixed";
}

export const useStyles = makeStyles<typeof theme, StylesProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  header: {
    padding: padding,

  },
  main: {
    flex: 1,
    padding: padding,
    overflowY:"auto",
    msOverflowStyle:"none",
    scrollbarWidth:"none",
    "&::-webkit-scrollbar": {
      display:"none",
    },
  },
  footer: {
    width: "100%",
    padding: padding,
    position: ({ footerPosition }) => footerPosition ?? "relative",
    backgroundColor: theme.palette.background.default,
    bottom: 0,
    left: 0,
    right: 0,

    "& .MuiContainer-root": {
      padding: 0,
    },
  },
});