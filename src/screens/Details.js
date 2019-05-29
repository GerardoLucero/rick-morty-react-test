import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

//MaterialUI
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Fab from '@material-ui/core/Fab'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace'

//Containers
import Layout from '../containers/Layout' 
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

//Details from itemLists
function Details(props) {
 const { title , subheader, image, text1, text2, text3 } = props.location.state? props.location.state: ""
  const classes = useStyles();

  function back(){
    props.history.goBack()
  }

  return (
    <Layout>
        {props.location.state?
    <Card className={classes.card}>
      <CardHeader
        avatar={<Fab size="small" color="secondary" aria-label="Add" className={classes.fab} onClick={back}>
                    <KeyboardBackspaceIcon />
                </Fab>}
        title={title}
        subheader={subheader}
      />
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="primary" component="p">
            {text1}
        </Typography>
        <Typography variant="body2" color="primary" component="p">
            {text2}
        </Typography>
        <Typography variant="body2" color="primary" component="p">
            {text3}
        </Typography>
      </CardContent>
      
    </Card>:<Typography variant="h4" color="primary">
            No existen datos para mostrar
        </Typography>}
    </Layout>
  );
}

export default Details
