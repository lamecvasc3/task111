import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
  containermain:{    
      position:"absolute", 
      top:"-15px",   
      padding:0,
      margin:0,
      
  },
   boxmain:{
    position:"relative",
   },

  typoone:{
   fontSize:"10px",
   fontWeight:300,
   lineHeight:"12px",
   color:"#333333",
   paddingBottom:15,
   padding:"5px",
  },
  
  boxstyle:{
      padding:0,
      paddingLeft:3,
      paddingRight:0,
      
  },
  formlabel:{
      fontSize:10,
      marginLeft:0,
      backgroundColor:"#FFFFFF",
      marginBottom:0,
      width:"100%",
      "& .MuiTypography-body1":{
          fontSize:12,
      }
  }
 
});