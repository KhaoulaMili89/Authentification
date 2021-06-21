import {Link} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from 'react-router-dom'
import {logout} from '../actions/authAction'
import {useSelector,useDispatch} from 'react-redux'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const history = useHistory()
const isAuth = useSelector(state => state.authReducer.isAuth)
const user = useSelector(state => state.authReducer.user)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit"><Link to='/Home'>Home</Link></Button>
            { isAuth ?
                        <Button color="inherit" onClick={()=>dispatch(logout(history))}><Link to='/Register'>Logout</Link></Button>

            : (<><Button color="inherit"><Link to='/Login'>Login</Link></Button>
            <Button color="inherit"><Link to='/Register'>Register</Link></Button></>)
            }
            
            <Button color="inherit"><Link to='/Profile'>Profile</Link></Button>
            <Button color="inherit"><Link to='/Posts'>Posts</Link></Button>
            { user ? <span>{user.firstname}</span> : <></>}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
