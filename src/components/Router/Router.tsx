import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CreatePassword } from 'features/onboarding/pages/CreatePassword'
import { Welcome } from 'features/onboarding/pages/Welcome'
import { Terms } from 'features/onboarding/pages/Terms'
import { ActivateAccount } from 'features/onboarding/pages/ActivateAccount'
import { OnboardingRoutes } from 'features/onboarding/constants/routes'
import { EnterIDCard } from 'features/onboarding/pages/EnterIDCard'
export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={OnboardingRoutes.welcome} component={Welcome}/>     
        <Route exact path={OnboardingRoutes.terms} component={Terms}/>        
        <Route exact path={OnboardingRoutes.activateAccount} component={ActivateAccount} ></Route>
        <Route exact path={OnboardingRoutes.enterID} component={EnterIDCard} ></Route>       
      </Switch>
    </BrowserRouter>
  )
}