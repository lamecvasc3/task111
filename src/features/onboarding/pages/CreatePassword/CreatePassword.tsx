import React from "react";
import { Container, Box } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { CloseButton } from "features/onboarding/components/CloseButton";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { PasswordInput } from "features/onboarding/components/inputs/PasswordInput";
import { cancelLabel, nextLabel } from "constants/buttons/labels";

import { useStyles } from "./CreatePassword.style";
import "_assets/css/forms/mainform.scss"

export const CreatePassword: React.FC = () => {
  const style = useStyles();
  const homeRoute = "/"

  const [passwordInput, setPasswordInput] = React.useState("");

  const onPasswordChange = (event: string) => {
    setPasswordInput(event)
  }
  
  const onCancelButtonClick = () => {
    console.log("cancelar")
  };

  const onNextButtonClick = () => {
    console.log("proximo")
  };

  return (
    <Container maxWidth="xs" className={style.container}>
      <div className="main-form">
          <AppBar
            homeRoute={homeRoute}
            action={
              <Button
                palette="secondary"
                size="small"
                startIcon={<CloseButton />}
                onClick={onCancelButtonClick}
              >
                {cancelLabel}
              </Button>
            }
          />
        <div className="form-body">
          <div className="top">
            <Box className={style.header}>
              <ProcessDescriptionHeader
                title="Ative sua conta"
                subtitle={"Crie uma senha para sua conta"}
                description="Essa senha deve ter 6 dígitos e deve ter ao menos uma letra"
              />
            </Box>
          </div>
          <div className="content">
            <div className={`align-top ${style.passwordContent}`}>
              <PasswordInput
                label="Senha"
                onChange={onPasswordChange}
                value={passwordInput}
              />
            </div>
          </div>
        </div>
        <Box className={style.footer}>
          <ProcessPageFooter
            primaryButton={
              <Button
                endIcon={<KeyboardArrowRight color="secondary" />}
                onClick={onNextButtonClick}
              >
                {nextLabel}
              </Button>
            }
          />
        </Box>
      </div>
    </Container>
  );
};
