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




const p1 = `O “Termo de Uso” é o contrato eletrônico que visa limitar a
responsabilidade, direcionar a forma de utilização do seu produto por
parte dos clientes, assim como esclarecer possíveis dúvidas que seu
cliente tenha sobre o funcionamento do seu software/produto.`

const p2 = `Antes mesmo de indicarmos quais cláusulas devemos incluir na Política de
Privacidade e no termo de uso, devemos entender que para que esses
documentos tenham validade jurídica precisamos estabelecer as cláusulas
de modo coerente e sem abusividade, já que esses documentos são
contratos de adesão (significa que há imposição dos termos e condições
de uso do produto ou serviço pela Startup aos usuários) e, caso seja
considerado abusivo, serão desconsiderados em caso de controvérsia
judicial, deixando de surtir o efeito desejado.`

const p3 = `Indicamos que nos “Termos de Uso” contenham as seguintes cláusulas: `

const p4 = `Indicamos que nos “Termos de Uso” contenham as seguintes cláusulas: `

const p5 = `A) Defina os termos a serem usados no documento.`

const p6 = `Lembre-se que o usuário, muitas vezes, não tem conhecimento técnico sobre 
programação ou tecnologia, por isso é importante que você explique a ele de 
forma clara, objetiva e específica o significado de cada um dos termos utilizados 
para para a execução do serviços oferecidos ou utilização do produto. `

const p7 = `B) Delimite o escopo do serviço/produto a ser oferecido via site ou aplicativo.`

const p8 = `Informa os usuários o que eles estão utilizando ou adquirindo, somente isso 
evitará reclamações relacionadas ao serviço ou produto. Seja transparente com o
seu cliente.`

const p9 = `C) Informe as responsabilidades da sua empresa e do usuário.`

const p10 = `Defina a responsabilidade de cada uma das partes.` 

const p11 = `Indicamos a utilização moderada das cláusulas que limitam responsabilidades, tais
              como as cláusulas de “disclaimer” (Todas as opiniões expressadas nos
              comentários deste site-aplicativo não expressam a opinião da Startup,
              mas tão somente a opinião de quem os escreveu”) ou, então, as
              excludentes de responsabilidade (Exemplo de cláusula: A Startup não se
              responsabiliza por qualquer dano ou prejuízo com envio de informações ou
              de conteúdo publicitário que não tenham sido disparados pela própria
              Startup, sejam esses últimos legítimos ou indesejados (Spam), e também
              não se responsabiliza pelo conteúdo das opiniões postadas no aplicativo
              ou site). Elas são uma ótima forma de limitação de responsabilidade,
              gerando menos riscos a startup, porém utilize-a com moderação para que
              seu contrato não seja anulado por ser excessivamente oneroso a uma das
              partes quando numa futura ação judicial e, com isso, o objetivo da
              política de privacidade ou termo de uso não seja cumprido.`


const p12 = `D) Divulgue a quem pertence os direitos autorais. `      

const p13 = `Inclua cláusula sobre direitos
            autorais para impossibilitar o uso da tecnologia desenvolvida pela sua
            Startup por terceiros não autorizados.`

const p14 = `E) Disponha como se dará o processo de compra pelo usuário. `

const p15 = `Informe como será feita a aquisição do seu serviço/produto, como será o processo de devolução ou rescisão do
contrato, se haverá reembolso dos valores pagos e como será feito, além
disso como deverá proceder para cancelar o serviço. `

const p16 = `Caso o seu produto ou serviço seja para adultos, alerte sobre a impossibilidade de uso para
menores.`