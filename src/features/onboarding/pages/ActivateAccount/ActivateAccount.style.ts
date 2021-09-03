import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

export const useStyles = makeStyles({
  headerWrapper:{
    margin: '-16px',
    padding: '16px',
  },
  
  footerWrapper:{
    backgroundColor: theme.palette.background.paper,
    margin: '-16px',
    padding: '16px',
  }
});