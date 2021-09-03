import React from "react";
import { Box, Container } from "@material-ui/core";
import { useStyles } from "./ProcessPageLayout.style";

interface ProcessPageLayoutProps {
  appBar?: React.ReactNode;
  header: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
  footerPosition?: "relative" | "fixed";
  backgroundMainColor?: string;
}

export const ProcessPageLayout: React.FC<ProcessPageLayoutProps> = ({
  appBar,
  header,
  main,
  footer,
  footerPosition,
  backgroundMainColor = "#FFFFFF",
}) => {
  const pageStyles = useStyles({ footerPosition });

  return (
    <Container className={pageStyles.container}>
      {appBar}
      <Box component="header" className={pageStyles.header}>
        {header}
      </Box>
      <Box component="main" className={pageStyles.main} style={{backgroundColor:backgroundMainColor}}>
        {main}
      </Box>
      {footer && (
        <Box
          component="footer"
          position={footerPosition}
          className={pageStyles.footer}
        >
          <Container>{footer as React.ReactChild}</Container>
        </Box>
      )}
    </Container>
  );
};