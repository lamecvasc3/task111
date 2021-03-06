import React from "react";
import { Container, Typography, Checkbox, FormControlLabel, Box } from "@material-ui/core";
import { useStyles } from "./TermsMain.style";
import "./TermsMain.scss";


interface TermsTextProps {
  termsAcceptCheckBox: (event: any) => void;
  valueCheckBox: boolean;
}


export const TermsMain = ({
  valueCheckBox,
  termsAcceptCheckBox,
}: TermsTextProps) => {


  const styles = useStyles();

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box className={styles.boxmain}>
        <Container  id="container-main-id" className={styles.containermain}>
            <Typography id="textbase" className={styles.typoone}>{p1}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p2}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p3}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p4}</Typography>
            <Typography id="textcaps" className={styles.typoone}>{p5}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p6}</Typography>
            <Typography id="textcaps" className={styles.typoone}>{p7}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p8}</Typography>
            <Typography id="textcaps" className={styles.typoone}>{p9}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p10}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p11}</Typography>
            <Typography id="textcaps" className={styles.typoone}>{p12}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p13}</Typography>
            <Typography id="textcaps" className={styles.typoone}>{p14}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p15}</Typography>
            <Typography id="textbase" className={styles.typoone}>{p16}</Typography>
                   <FormControlLabel className={styles.formlabel}
                          control={
                         <Checkbox     
                             name="check"
                             onChange={termsAcceptCheckBox}  
                             checked={valueCheckBox}
                             size="small"           
                             className={styles.boxstyle}                 
                             color="primary"
                             inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                         }
                         label="Concordo com os termos de uso."
                         />                   
        </Container>
    </Box>
  );
};




const p1 = `O ???Termo de Uso??? ?? o contrato eletr??nico que visa limitar a
responsabilidade, direcionar a forma de utiliza????o do seu produto por
parte dos clientes, assim como esclarecer poss??veis d??vidas que seu
cliente tenha sobre o funcionamento do seu software/produto.`

const p2 = `Antes mesmo de indicarmos quais cl??usulas devemos incluir na Pol??tica de
Privacidade e no termo de uso, devemos entender que para que esses
documentos tenham validade jur??dica precisamos estabelecer as cl??usulas
de modo coerente e sem abusividade, j?? que esses documentos s??o
contratos de ades??o (significa que h?? imposi????o dos termos e condi????es
de uso do produto ou servi??o pela Startup aos usu??rios) e, caso seja
considerado abusivo, ser??o desconsiderados em caso de controv??rsia
judicial, deixando de surtir o efeito desejado.`

const p3 = `Indicamos que nos ???Termos de Uso??? contenham as seguintes cl??usulas: `

const p4 = `Indicamos que nos ???Termos de Uso??? contenham as seguintes cl??usulas: `

const p5 = `A) Defina os termos a serem usados no documento.`

const p6 = `Lembre-se que o usu??rio, muitas vezes, n??o tem conhecimento t??cnico sobre 
programa????o ou tecnologia, por isso ?? importante que voc?? explique a ele de 
forma clara, objetiva e espec??fica o significado de cada um dos termos utilizados 
para para a execu????o do servi??os oferecidos ou utiliza????o do produto. `

const p7 = `B) Delimite o escopo do servi??o/produto a ser oferecido via site ou aplicativo.`

const p8 = `Informa os usu??rios o que eles est??o utilizando ou adquirindo, somente isso 
evitar?? reclama????es relacionadas ao servi??o ou produto. Seja transparente com o
seu cliente.`

const p9 = `C) Informe as responsabilidades da sua empresa e do usu??rio.`

const p10 = `Defina a responsabilidade de cada uma das partes.` 

const p11 = `Indicamos a utiliza????o moderada das cl??usulas que limitam responsabilidades, tais
              como as cl??usulas de ???disclaimer??? (Todas as opini??es expressadas nos
              coment??rios deste site-aplicativo n??o expressam a opini??o da Startup,
              mas t??o somente a opini??o de quem os escreveu???) ou, ent??o, as
              excludentes de responsabilidade (Exemplo de cl??usula: A Startup n??o se
              responsabiliza por qualquer dano ou preju??zo com envio de informa????es ou
              de conte??do publicit??rio que n??o tenham sido disparados pela pr??pria
              Startup, sejam esses ??ltimos leg??timos ou indesejados (Spam), e tamb??m
              n??o se responsabiliza pelo conte??do das opini??es postadas no aplicativo
              ou site). Elas s??o uma ??tima forma de limita????o de responsabilidade,
              gerando menos riscos a startup, por??m utilize-a com modera????o para que
              seu contrato n??o seja anulado por ser excessivamente oneroso a uma das
              partes quando numa futura a????o judicial e, com isso, o objetivo da
              pol??tica de privacidade ou termo de uso n??o seja cumprido.`


const p12 = `D) Divulgue a quem pertence os direitos autorais. `      

const p13 = `Inclua cl??usula sobre direitos
            autorais para impossibilitar o uso da tecnologia desenvolvida pela sua
            Startup por terceiros n??o autorizados.`

const p14 = `E) Disponha como se dar?? o processo de compra pelo usu??rio. `

const p15 = `Informe como ser?? feita a aquisi????o do seu servi??o/produto, como ser?? o processo de devolu????o ou rescis??o do
contrato, se haver?? reembolso dos valores pagos e como ser?? feito, al??m
disso como dever?? proceder para cancelar o servi??o. `

const p16 = `Caso o seu produto ou servi??o seja para adultos, alerte sobre a impossibilidade de uso para
menores.`