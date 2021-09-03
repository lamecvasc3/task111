import { Box, TextField, Typography } from '@material-ui/core'
import React from 'react'
import { useStyle } from './InputIDCard.style'
import { useMask } from "hooks/useMask";
import { maskIdCard } from "_utils/masks/idCard";
import "./InputIDCard.scss"

export const InputIDCard: React.FC = () => {

    const styles = useStyle()

    const [idInput, setIdInput] = useMask(maskIdCard);

    const onIdChange = (event: React.ChangeEvent<HTMLInputElement>) =>
      setIdInput(event.target.value);

    return (
        <Box className={styles.containerInput}>
            <Box>
                <Typography id="inputID" className={styles.inputID}>Insira o ID CARD de 9 dígitos</Typography>
            </Box>
            <TextField
                id="inputIDCard"
                variant="outlined" 
                placeholder={"000000000"}
                className={styles.inputIDCard}
                value={idInput}
                onChange={onIdChange}
            />
        </Box>
    )
}