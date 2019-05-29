import React from 'react'
//Material-ui
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'


const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}))
//Item for a list
function ListItemCustom(props) {
  const classes = useStyles();

  const { value, image, text, icon, handleClick } = props;

  return (
        <ListItem key={value} button onClick={handleClick}>
            <ListItemAvatar>
                {image?<Avatar alt={`Image n°${value + 1}`} src={image} className={classes.bigAvatar} />:
                <Avatar className={classes.bigAvatar}>
                  {icon}
                </Avatar>}
            </ListItemAvatar>
            <ListItemText primary={text} />
        </ListItem>
  )
}

export default ListItemCustom