import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { OnboardingTitle } from "features/onboarding/components/texts/OnboardingTitle";
import { WelcomePageButton } from "features/onboarding/components/WelcomePageButton";
import { OnboardingRoutes } from "features/onboarding/constants/routes";
import { ClickHereLink } from "features/onboarding/components/links/ClickHereLink";
import { useOnboardingStyles } from "./Welcome.style";

import Logo from "_assets/img/logo_empresa.png";

export const Welcome: React.FC = () => {
    const styles = useOnboardingStyles();

    return (
        <Container maxWidth="xs" className={styles.container}>
            <Grid container direction="column" className={styles.content}>
                <Grid item>
                    <img src={Logo} alt="logo" width="117px" height="37px"></img>
                </Grid>
                <Grid item className={styles.title}>
                    <OnboardingTitle />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    spacing={2}
                    className={styles.buttonsSection}
                >
                    <Grid item className={styles.activeButtonWrapper}>
                        <WelcomePageButton
                            size="large"
                            palette="white"
                            borderWidth={2}
                            route={OnboardingRoutes.terms} //
                        >
                            <div className={styles.activeText}> Ativar minha conta</div>
                           
                        </WelcomePageButton>
                    </Grid>
                    <Grid item className={styles.signInButtonWrapper}>
                        <WelcomePageButton
                            size="normal"
                            palette="primary"
                            route={"/"}
                        >
                            <div className={styles.signInText}> Entrar na minha conta</div>
                           
                        </WelcomePageButton>
                    </Grid>
                </Grid>
                <Grid item className={styles.link}>
                    <ClickHereLink />
                </Grid>
            </Grid>
        </Container>
    );
};