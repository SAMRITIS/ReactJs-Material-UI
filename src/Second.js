import Grid from '@material-ui/core/Grid'
//import { makeStyles } from '@material-ui/core/styles';
import t from './css/t.jpg';
import f from './css/f.jpg';
import s from './css/s.png';
import {Box} from "@material-ui/core";
//import Paper from '@material-ui/core/Paper';
//import {Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const useStyles = makeStyles((theme)=>({
    bg : {
            position: "relative",
            width: "100%",
            marginTop : "10%"
      },
    middle : {
        transition: ".5s ease",
        opacity: "0",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        '&:hover': {
            opacity: "1"
         }
      },
      
      text : {
        color: "white",
        fontSize: "28px",
       
        
      },  
      img : {
        width : "90%", 
        height : "100%",
        
        opacity: "1",
        transition: ".5s ease",
        backfaceVisibility: "hidden",
        '&:hover': {
            opacity: "0.3"
         }
      }
}));
function Second(){
    const classes = useStyles();
   
    return (
        <>
        <Box ml={5} mr={0}>
              <Grid container>
                 <Grid item  xs={12} sm={6} >
                 <div className={classes.bg}>
                    <img src={t} className={classes.img} alt=""/>
                    <div className={classes.middle}> <div className={classes.text}>Getting better <br/> results on social <br/>than cute cat clips?<br/> Yes, you can!</div> </div>
                  </div>
                 </Grid>
                 <Grid item  xs={12} sm={6}>
                 <div className={classes.bg}>
                
                    <img src={f} className={classes.img} alt=""/>
                    <div className={classes.middle}> <div className={classes.text } >What would happen <br/>if your lawn could talk? <br/>It’d send you to Horta</div> </div>
                  </div>
                  
                 </Grid>    
              </Grid>
            </Box>

            <Box ml={5} mr={2}>
              <Grid container>
                 <Grid item  xs={12} sm={4} >
                 <div className={classes.bg}>
                    <img src={t} className={classes.img} alt=""/>
                    <div className={classes.middle}> <div className={classes.text}>Brands that fail on sustainability, <br/>will lose <br/>significance fast</div> </div>
                  </div>
                 </Grid>
                 <Grid item  xs={12} sm={4}>
                 <div className={classes.bg}>
                
                    <img src={f} className={classes.img} alt=""/>
                    <div className={classes.middle}> <div className={classes.text } >Becoming a market <br/>leader, by caring<br/> for people</div> </div>
                  </div>
                  
                 </Grid> 
                 <Grid item  xs={12} sm={4} >
                 <div className={classes.bg}>
                
                    <img src={s} className={classes.img} alt=""/>
                    <div className={classes.middle}> <div className={classes.text } ><ArrowForwardIosIcon/>View for More</div> </div>
                  </div>
                  
                 </Grid>    
              </Grid>
            </Box>  
        </>    

    );
}

export default Second;