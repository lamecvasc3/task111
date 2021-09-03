import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";
import backgroundImage from "_assets/img/loginBackground.svg";


export const useOnboardingStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "flex-end",
    height: "100%",

    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundColor: "#323751",
    color: "white",

    [theme.breakpoints.up("md")]: {
      padding: "0 64px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 48px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 63px",
    },
  },
  content: {
    marginTop: window.screen.height / 5,
  },
  title: {
    marginBottom: 56,
    marginTop: 40,


    [theme.breakpoints.down("xs")]: {
      marginBottom: 42,
      marginTop: 30,
      marginRight: 22,

    },
  },
  buttonsSection: {
    marginBottom: 32,
  },

  activeButtonWrapper: {
    margin: "10px 44px 0px 44px",

    [theme.breakpoints.down("xs")]: {
      margin: "0px",
      marginBottom: "8px",


    },
  },
  signInButtonWrapper: {
    margin: "0 64px",
    [theme.breakpoints.down("xs")]: {
      margin: "0 20px",
    },
  },
  onboardingButton: {
    borderWidth: 2,
    fontWeight: 900,
    "&:hover": {
      borderWidth: 2,
    },
  },
  link: {
    marginBottom: "35px",
    paddingRight: "39px"
  },
  activeText: {
    transform: "scale(0.957, 1)"
  },
  signInText: {
    transform: "scale(0.99, 1)"
  }

});
