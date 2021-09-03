import { makeStyles } from "@material-ui/core";
import { theme } from "../../../../_config/theme";

export interface StylesProps {
  borderWidth?: 1 | 2;
  size?: "large" | "normal";
  palette?: "primary" | "white";
}

export const useStyles = makeStyles({
  button: {
    textTransform: "none",
    borderStyle: "solid",


    height: ({ size }: StylesProps) => (size === "large" ? 48 : 38),
    fontSize: ({ size }: StylesProps) =>
      (size === "large" ? "18px" : "12px"),
    lineHeight: ({size} : StylesProps) => (size === "large" ? "21px" : "14px"),
    padding:  ({size} : StylesProps) => (size === "large" ? "0px 13px 0px 12px" : "12px 14px"),
    letterSpacing:  ({size} : StylesProps) => (size === "large" ? "0px" : "0px"),
    fontWeight:  ({size} : StylesProps) => (size === "large" ? 700 : 500),
    transform: "scale(0.99,1)",

    backgroundColor: ({ palette }: StylesProps) =>
      palette === "primary" ? theme.palette.primary.main : "#F9F9F9",
    borderColor: ({ palette }: StylesProps) =>
      palette === "primary" ? "white" : theme.palette.primary.main,
    borderWidth: ({ borderWidth }: StylesProps) => borderWidth ?? 1,
    
    color: ({ palette }: StylesProps) =>
      palette === "primary" ? "white" : theme.palette.primary.main,

    "&:hover": {
      backgroundColor: ({ palette }: StylesProps) =>
        palette === "primary" ? theme.palette.primary.main : "#F9F9F9",
      borderColor: ({ palette }: StylesProps) =>
        palette === "primary" ? "white" : theme.palette.primary.main,
      color: ({ palette }: StylesProps) =>
        palette === "primary" ? "white" : theme.palette.primary.main,
    },
  },
});