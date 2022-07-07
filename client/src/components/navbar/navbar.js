import React from 'react';
import {AppBar, Typography,Avatar,Toolbar, Button} from '@material-ui/core';
import useStyles from './styles'
import cm from '../../images/cam.png';
import {Link} from 'react-router-dom';

const Navbar= ()=>{

const classes=useStyles();
const user =null; 
return (
< AppBar className={classes.appBar} position ="static" color="inherit">
<div className={classes.brandContainer}>
<Typography className={classes.heading} variant='h4' align="center"> ExPRESSOO
</Typography>
<img className={classes.image} src={cm} alt="memories" height="60"   />
</div>
<Toolbar className={classes.Toolbar}>
{user?(
<div>
<Avatar className={classes.Purple} alt={user.result.name} src={user.result.imageUrl} >
    {user.result.name.CharAt(0)}
</Avatar>
<Typography className={classes.userName} variant="h6" >
{ user.result.name }
</Typography>
<Button variant="contained" className={classes.logout} color="secondary">
Logout    
</Button>

</div>
):
(
<Button component={Link} to="/auth" variant="contained" color='primary'> </Button>
)
}
</Toolbar>
</AppBar>

);


}

export default Navbar;
