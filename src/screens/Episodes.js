import React, { useEffect } from 'react';
import { withRouter } from "react-router"
import { makeStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
//Material-UI
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import ListItemCustom from '../components/ListItemCustom'
import Typography from '@material-ui/core/Typography'
import PaginationHeader from '../components/PaginationHeader'
import LinearProgress from '@material-ui/core/LinearProgress'
//Actions
import { getEpisodesFilter } from '../actions/episodes'
//images
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}))


function Episodes(props) {
  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  function seasonImage(row){
    if(row.episode.includes("S01")){
      return t1
    }
    else if(row.episode.includes("S02")){
      return t2
    }
    else if(row.episode.includes("S03")){
      return t3
    }
  }

  //Send to Details and build the object
  function handleClick(row){
    var image = seasonImage(row)
    props.history.push({
      pathname: '/Details',
      state: { title : row.name + " - "+  row.episode, 
               subheader: row.air_date, 
               image: image, 
               text1: "Episode: " + row.episode, 
               text2: "Season: " + row.episode[2], 
               text3: "Characters: " + row.characters.length  }
    })
  }

  function nextPage() {
    setPage(page+1);
    console.log(page)
  } 

  function backPage() {
    setPage(page-1);
  } 

    //Featch API Episodes
  async function fetchEpisodes() {
    props.getEpisodesFilter(page, props.search)
  }
  
  useEffect(() => {
    fetchEpisodes()
  }, [page, props.search]);


  return (
      <React.Fragment> 
        <Typography align="center" variant="h3" >Episodes</Typography>  
        {props.episodes?
         !props.episodes.error?<React.Fragment>
            <PaginationHeader page={page} backPage={backPage} nextPage={nextPage} count={props.episodes.info.count}/>
          <Paper className={classes.root}>
              <List >
              {props.episodes.results.map(value => (
                  <ListItemCustom handleClick={() => handleClick(value)} key={value.id} value={value.id} text={value.name + " - "+ value.episode } image={ seasonImage(value)}/>
              ))} 
              </List>
          </Paper>
        </React.Fragment>:<Typography align="center" variant="body2" >0 results</Typography>  
        :<LinearProgress/>}
        </React.Fragment> 
  )
}

const mapStateToProps = state => {
    return {
      episodes: state.episodes.data,
    }
}

export default withRouter(compose(connect(mapStateToProps, { getEpisodesFilter }))(Episodes))

