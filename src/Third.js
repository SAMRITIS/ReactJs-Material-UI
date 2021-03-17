import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Typography} from "@material-ui/core";
import back from './css/back.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(()=>({
firstDiv : {
    backgroundImage : `url(${back})`,
    backgroundSize: "cover",
    
},    
second : {
   backgroundColor : 'blue',
   backgroundSize: 'contain',
   width: '70%',
   height: '70%',
   textAlign : 'center',
}

}));    
function Third() {
    const classes = useStyles();
  return (
    <div className={classes.firstDiv}>  
    <Box mt={20} ml={10} >
    <Grid container>
      <Grid item   sm={6}>
      <Box mt={3} mb={3}>
         <Typography variant="h3">Would you like<br/>to work <br/>at Bubka? </Typography><br/><br/>
         <Typography  variant="h6" ><ArrowForwardIosIcon/>See if there's a job or an internship for you.</Typography>
      </Box>   
    </Grid>
    <Grid item  sm={6} className={classes.second}>
          <Box mt={3} mb={3}>
         <Typography   variant="h3"> What type<br/>of Bubka <br/>are you? </Typography><br/><br/>
         <Typography   variant="h6"><ArrowForwardIosIcon/>Let's Find Out</Typography>
         </Box>
      </Grid>
    </Grid>
    </Box>
    </div>
  );
}

export default Third;
