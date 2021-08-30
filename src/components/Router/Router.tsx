import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { CreatePassword } from 'features/ActivateByCard/pages/CreatePassword'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CreatePassword}/>        
      </Switch>
    </BrowserRouter>
  )
}