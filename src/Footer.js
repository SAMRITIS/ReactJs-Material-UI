import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  foo : {
      backgroundColor: "black",
      clear: "both",
      position: "relative",
      height: "40%",
      marginTop: "100%",
      marginLeft: "2%",
      marginRight: "2%",
      marginBottom: "2%",
      outline : "none"
  },
  text : {
      color: "#00b8e6",
      fontWeight: "bold",
      letterSpacing: "3px",
      fontSize: "60px"

  },
  tex : {
    color: "#00b8e6",
    fontWeight: "bold",
    letterSpacing: "3px",
    fontSize: "15px",
    marginLeft: "10%"
},
te : {
  color: "white",
  fontWeight: "bold",
  letterSpacing: "3px",
  fontSize: "15px",
 
}, 
Paper : {
   backgroundColor : "transparent"
},
input : {
  padding : "1%",
  width : "70%",
  marginTop : "1%",
  color : "white",
  backgroundColor : "transparent",
  outline : "none",
  borderBottom: "1px solid white",
  border : "none",
  height : "30px"
},
button : {
  backgroundColor : "transparent",
  color : "white",
  borderRadius : "20px",
  border : "None",
  width : "100%",
  '&:hover': {
    outline : "none"
 },'&:focus': {
  outline : "none"
},'&:active': {
  outline : "none"
}
},
bot: {
  position : "relative",
  marginTop : "12%"
},
b : {
  marginLeft: "10%"
}
  

}));


function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.foo} >
    <Box mt={3} p={6} mb={10}>  
    <Grid container>
        <Grid item xs={6}>
        <Typography className={classes.text} variant="h4"  align="justify" >Come visit. <br/> Share thoughts. <br/> Have a drink.</Typography>
        </Grid>
        <Grid item xs={6}>
        </Grid>
    </Grid>
    </Box>
    <Box mt={3} className={classes.tex}>  
    <Grid container>
        
        <Grid item xs={3} p={0} align="justify">
        <Typography  variant="h6" >Address</Typography><br/> <Typography className={classes.te} variant="h2"  >Rijnkaai 37<br/>7th floor <br/>B-2000 Antwerp</Typography>
        </Grid>
        <Grid item xs={3}>
        <Typography  variant="h6"   >General </Typography><br/> <Typography className={classes.te} variant="h2"   >info@bubka.be<br/>+32 3 206 86 00  </Typography>
        </Grid>
        <Grid item xs={12} sm={6} p={0} align="justify">
        <Typography  variant="h6"   >Newslatter</Typography><br/> <input type="text" placeholder="Enter Your Mail Here" style={{fontSize : "20px"}} className={classes.input}/>
        <br/> <br/><br/  ><input type="checkbox" value="Boat"/><label> I accept the <a href="/">terms and conditions.</a></label><br/><br/><button className={classes.button}><ArrowForwardIosIcon/> Subscribe our Newslatter</button>

        </Grid>
        
    </Grid>
    </Box><br/>
    <div className={classes.bot}>
    <Grid container>
    <Grid item  xs={12} sm={6}>
        <div className={classes.b} >
        <FacebookIcon  style={{color :"white", marginRight: 30}} /><TwitterIcon style={{color :"white", marginRight: 30}}/> <LinkedInIcon style={{color :"white", marginRight: 30}}/><InstagramIcon style={{color :"white", marginRight: 30}} /><YouTubeIcon style={{color :"white", marginRight: 30}} /><PinterestIcon style={{color :"white", marginRight: 30}}/>
        </div>
        </Grid>
        <Grid item  xs={12} sm={6}>
        <Typography  variant="h6"  align="center"     style={{color : "white", fontSize : "10px"}} > <CopyrightOutlinedIcon/>2021 Bubka </Typography>
        </Grid>
    </Grid>
    </div>
    </div>
    
  );
}

  export default Footer;
  