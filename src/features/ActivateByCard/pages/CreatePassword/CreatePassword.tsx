import React from "react";
import { Container } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { CloseButton } from "features/ActivateByCard/components/CloseButton";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { AppBar } from "components/AppBar";
import { Button } from "components/Button";
import { PasswordInput } from "features/ActivateByCard/components/inputs/PasswordInput";
import { cancelLabel, nextLabel } from "constants/buttons/labels";

import { useStyle } from "_assets/makeStyles/container/container.style";
import "_assets/css/forms/mainform.scss"

export const CreatePassword: React.FC = () => {
  const style = useStyle();


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
            <ProcessDescriptionHeader
              title="Ative sua conta"
              subtitle="Crie uma senha para sua conta"
              description="Essa senha deve ter 6 dígitos e deve ter ao menos uma letra"
            />
          </div>
          <div className="content">
            <div className="align-top">
              <PasswordInput
                label="Senha"
                onChange={onPasswordChange}
                value={passwordInput}
              />
            </div>
          </div>
        </div>
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
      </div>
    </Container>
  );
};
