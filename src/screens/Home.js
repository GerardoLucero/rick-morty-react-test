import React from 'react'
import PropTypes from 'prop-types'

//Material UI
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Toolbar from '@material-ui/core/Toolbar'
import { fade } from '@material-ui/core/styles/colorManipulator'
import IconButton from '@material-ui/core/IconButton'

//Containers
import Layout from '../containers/Layout' 

//Screens
import Character from './Characters'
import Episodes from './Episodes'

//Icons
import AccessibilityIcon from '@material-ui/icons/Accessibility'
import TvIcon from '@material-ui/icons/Tv'
import InfoIcon from '@material-ui/icons/Info'
import MenuIcon from '@material-ui/icons/Menu'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  tabs: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    margin: theme.spacing(1, 0),
  },
}));

function Home(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0)
  const [input, setInput] = React.useState('')
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [anchorE2, setAnchorE2] = React.useState(null)
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleClickInfo(event) {
    setAnchorE2(event.currentTarget);
  }

  function handleCloseInfo() {
    setAnchorE2(null);
  }
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleInput(event) {
    setInput(event.target.value);
  }
  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleClick}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Menu
            elevation={2}
            getContentAnchorEl={null} anchorOrigin={{vertical: 'bottom',horizontal: 'center',}}
            transformOrigin={{vertical: 'top',horizontal: 'center',}}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem  onClick={(event) => handleChange(event, 0)}>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Characters" />
            </MenuItem>
            <MenuItem onClick={(event) => handleChange(event, 1)}>
          <ListItemIcon>
            <TvIcon />
          </ListItemIcon>
          <ListItemText primary="Episodes" />
        </MenuItem>
      </Menu>
          <Tabs className={classes.tabs} value={value} onChange={handleChange} indicatorColor="secondary">          
              <Tab label="Characters" icon={<AccessibilityIcon />} />
              <Tab label="Episodes" icon={<TvIcon />} />
          </Tabs>
      <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={handleInput}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
        <IconButton
            onClick={handleClickInfo}
            color="inherit">
            <InfoIcon />
          </IconButton>
        </Toolbar>
        <Menu elevation={2}
            getContentAnchorEl={null} anchorOrigin={{vertical: 'bottom',horizontal: 'center',}}
            transformOrigin={{vertical: 'top',horizontal: 'center',}}
            anchorEl={anchorE2}
            open={Boolean(anchorE2)}
            onClose={handleCloseInfo}>
              <Typography  align="center" variant="h6">Rules filter</Typography>  
              <Typography paragraph align="center" variant="body2">Use for monoSearch filter:value</Typography> 
              <Typography paragraph align="center" variant="body2">Use for multiSearch filter:value-filter2:value2 </Typography> 
              <Typography paragraph align="center" variant="body2"> Filter Character: [name, status, especies, gender]  </Typography>  
              <Typography paragraph align="center" variant="body2"> Filter Episode: [name, episode]  </Typography>
        </Menu>
      </AppBar>
      <Layout>
        {value === 0 && <TabContainer><Character search={input}/></TabContainer>}
        {value === 1 && <TabContainer><Episodes  search={input}/></TabContainer>}
      </Layout>
    </div>
  )
}

export default Home