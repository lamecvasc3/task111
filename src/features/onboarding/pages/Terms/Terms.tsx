import React from "react";
import { Box } from "@material-ui/core";
import { AppBar } from "components/AppBar";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { TermsText } from "features/onboarding/components/texts/TermsText";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { PageContainer } from "components/PageContainer";
import { useStyles } from "./Terms.style";
import { Button } from "components/Button";
import { nextLabel } from "constants/buttons/labels";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { TermsMain } from "features/onboarding/components/TermsMain";


export const Terms: React.FC = () => {

  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const history = useHistory();
  const styles = useStyles();

  const handleTermsAccept = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(event.target.checked);
  };

  const onNextButtonClick = () => {
    history.push(OnboardingRoutes.activateAccount);
  };

  return (
    
    <ProcessPageLayout
      appBar={<AppBar homeRoute={OnboardingRoutes.welcome} />}     
      header={      
        <Box className={styles.TermsDesc}>
        <ProcessDescriptionHeader
          title="Bem vindo ao Fitbank"
          subtitle="Termos de uso"          
          description="Para usar nossos serviços, você deve estar 
          de acordo com os termos de uso"
        />
        </Box>
        
      }
      backgroundMainColor="#F9F9F9"
      main={       
          <TermsMain
          valueCheckBox={acceptedTerms}
          termsAcceptCheckBox={handleTermsAccept}
          />       
      }
      footer={
        <ProcessPageFooter
          primaryButton={
            <Button
              disabled={!acceptedTerms}
              onClick={onNextButtonClick}
              endIcon={<KeyboardArrowRight color="secondary" />}
            >
              {nextLabel}
            </Button>
          }
        />
        
      }
      footerPosition="relative"
    />
   
  );
};