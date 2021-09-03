import React from 'react'
import {Option} from 'components/Option'
import { useHistory } from 'react-router'
import {useStyles} from './ActivateMethod.style'
import { OnboardingRoutes } from 'features/onboarding/constants/routes'
import smsReceived from '_assets/img/icn-sms-recebido.svg'
import cardReceived from '_assets/img/icn-cartao-recebido.svg'

export const ActivateMethod: React.FC = () => {
  const styles = useStyles(); 

  return (
    <div className={styles.containerOption}>
      <Option 
        title={"Recebi SMS"} 
        description={"Se você recebeu uma transferência ou um código de ativação no celular"}
        icon={smsReceived}
        iconWidth={'38'}
        iconHeight={'48'}
        goToRoute={OnboardingRoutes.welcome}
        
      />
      <Option 
        title={"Recebi um Cartão"} 
        description={"Está com seu cartão em mãos? Vamos confirmar os dados"}
        icon={cardReceived}
        iconWidth={'48'}
        iconHeight={'44'}
        goToRoute={OnboardingRoutes.enterID}
      />
    </div>
  )
}