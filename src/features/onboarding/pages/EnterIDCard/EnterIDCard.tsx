import React from 'react'
import { nextLabel } from "constants/buttons/labels";
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessPageFooter } from 'components/ProcessPageFooter'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { useStyles } from './EnterIDCard.style'
import { AppBar } from 'components/AppBar'
import { Box } from '@material-ui/core'
import { Button } from "components/Button";
import { KeyboardArrowRight } from "@material-ui/icons";
import { InputIDCard } from 'features/onboarding/components/InputIDCard'
import { QRCodeButton } from 'features/onboarding/components/QRCodeButton'
import QRCodeIcon from '_assets/img/QRCode.svg'

export const EnterIDCard : React.FC = () => {

    const styles = useStyles()

    const onNextButtonClick = () => {
        console.log("proximo")
      };
    
    return (
        <PageContainer>
            <ProcessPageLayout 
            appBar={<AppBar homeRoute={OnboardingRoutes.welcome} />}

            header={
                    <ProcessDescriptionHeader
                    title="Ative sua conta"
                    subtitle="Identificar seu cartão"
                    description="Insira o código de identificação de 9 dígitos impresso em seu cartão."
                    />

            }
            
            main={
                <Box className="main">
                    <InputIDCard></InputIDCard>
                    <Box className={styles.QRCodeButton}>
                        <QRCodeButton title="Ler QR Code" imagePath={QRCodeIcon} />
                    </Box>
                </Box>
            }

            footer={
                <Box className={styles.footer}>
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
            }

            />
            
        </PageContainer>
    )
}