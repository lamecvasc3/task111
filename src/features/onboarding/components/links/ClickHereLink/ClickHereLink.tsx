import { Link, Typography } from "@material-ui/core";
import React from "react";
import { useStyle } from "./ClickHereLink.style"

export const ClickHereLink = () => {
  const style = useStyle();
  return (
    <Typography className={style.clickHereLink} variant="caption" align="left">
    <Link className={style.clickHere}><strong>Clique aqui</strong></Link>
      &nbsp;para conhecer mais sobre o OpenBank
    </Typography>
  );
};