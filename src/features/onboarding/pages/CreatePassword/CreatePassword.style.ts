import { makeStyles } from "@material-ui/core";
import { textColors, theme } from "_config/theme";

export const useStyles = makeStyles({
    container: {
        backgroundColor: "#fff",
        padding: "0px",
        marginBottom: "0px",
    },
    header: {
        marginBottom: '37px',
        width: '83%',
    },
    footer: {
        padding: '0 16px 4vh 16px',
        width: "100%",
        position: "fixed",
        bottom: 0,
    },
    passwordContent: {
        marginTop: "6.6vh",
        marginLeft: "auto",
        marginRight: "auto"
    }
})