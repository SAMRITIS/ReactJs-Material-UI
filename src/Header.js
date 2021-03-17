//import './css/Header.css';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography, Button} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

function Header() {
   const classes = useStyles();
   
  return (
    <div>
     {/* Nav Bar */}
    <Box mt={2} p={3}>
     <Grid container>
         {/* Logo Or Title of Site */}
        <Grid item xs={6}>
          <Paper className={classes.paper} elevation={0}><Typography variant="h4"  align="justify" >Bubka</Typography></Paper>
        </Grid>
        {/* Groups of Buttons */}   
        <Grid item xs={6} mt={0}>
          <Paper className={classes.paper}  elevation={0} > 
          <Box display="flex"  p={2} alignItems="center">
           <Box ml={10} mt={0}>
           <Button  style={{ backgroundColor: 'transparent' }}>Work</Button>
           <Button  style={{ backgroundColor: 'transparent' }}>About</Button>
           <Button  style={{ backgroundColor: 'transparent' }}>Client</Button>
           <Button  style={{ backgroundColor: 'transparent' }}>News</Button>
           <Button  style={{ backgroundColor: 'transparent' }}>Job</Button>
           <Button  style={{ backgroundColor: 'transparent' }}>Contact</Button>
           </Box>
     
    </Box>
          </Paper>
        </Grid>
     </Grid>
     </Box>
    </div>
  );
}

export default Header;
