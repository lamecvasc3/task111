import React from "react";
import { Typography } from "@material-ui/core";
import { useStyle } from "./OnboardingTitle.style"

export const OnboardingTitle = () => {
  const style = useStyle();
  return (
    <Typography variant="h5" align="left" className={style.title}>
      Seja Bem Vindo
      <br />
      ao <strong>FitBank</strong>
    </Typography>
  );
};