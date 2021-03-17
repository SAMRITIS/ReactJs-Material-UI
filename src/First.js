import React  from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import simage from './css/simage.jpg';
import fimage from './css/fimage.jpg';
import timage from './css/timage.png';
import vimage from './css/vimage.jpg';
import bimage from './css/bimage.jpg';
import qimage from './css/qimage.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme)=>({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  fdiv : {
    marginTop : "1%",
    marginLeft : "10%",
    fontWeight : "bold"
  },
  anch : {
    marginTop : "0%",
    fontWeight : "bold",
    fontSize : "70px"
  }
}));


function First() {

  
  function change() {
          document.getElementById("link").innerHTML = "a billionaire?";
          document.getElementById("img").src = vimage;
        setTimeout(function() {
          document.getElementById("link").innerHTML = "an eco-brand?";
          document.getElementById("img").src = simage;
        }, 500);
        setTimeout(function() { 
          document.getElementById("img").src = timage;
          document.getElementById("link").innerHTML = "a client?";
        }, 1000);
        setTimeout(function() { 
          document.getElementById("img").src = fimage;
          document.getElementById("link").innerHTML = "sustainable?";
        }, 1500);
        setTimeout(function() { 
          document.getElementById("img").src = bimage;
          document.getElementById("link").innerHTML = "a viking?";
        }, 2000);   
        setTimeout(function() { 
          document.getElementById("img").src = qimage;
          document.getElementById("link").innerHTML = "a sales driver?";
        }, 2500);
         setTimeout(function() { 
          document.getElementById("img").src = fimage;
         
        }, 3000); 
  };
  
  function same()
  {
    document.getElementById("img").src = simage;
    document.getElementById("link").innerHTML = "a billionaire?"
  }
  const classes = useStyles();
  return (
    <div className={classes.fdiv}>
       <Grid container mt={10}>
    <Grid item  xs={12} sm={6}>
       
           <Typography  variant="h1"  align="justify" >Will you <br/> become</Typography><a  href="/"><h1 className={classes.anch} id="link" onMouseEnter={change} onMouseLeave={same}  style={{color : "black"}} >a sales driver?</h1></a>
           <Typography  variant="h4"  align="justify" >Stand out. Grow strong.</Typography><br/>
           <ArrowDownwardIcon style={{ fontSize: 200 }} />
        </Grid>
        <Grid item  xs={12} sm={6}>
          <img src={simage} id="img" onMouseEnter={change} onMouseLeave={same} width="500" height="600" alt="Hello"/>
        </Grid>
    </Grid>
    </div>
  );
}

export default First;
