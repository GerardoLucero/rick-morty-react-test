import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import ListItemCustom from '../components/ListItemCustom'
import PaginationHeader from '../components/PaginationHeader'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { withRouter } from "react-router"
import LinearProgress from '@material-ui/core/LinearProgress'
//Actions
import { getCharactersFilter } from '../actions/characters'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}))


function Characters(props) {
  const classes = useStyles();

  const [page, setPage] = React.useState(1);

  //Send to Details and build the object
  function handleClick(row){
    props.history.push({
      pathname: '/Details',
      state: { title : row.name + " - "+  row.gender, 
               subheader: row.status, 
               image: row.image, 
               text1: "Origin: " + row.origin.name, 
               text2: "Specie: " + row.species, 
               text3: "Episodes: " + row.episode.length  }
    })
  }


  function nextPage() {
    setPage(page+1);
    console.log(page)
  } 

  function backPage() {
    setPage(page-1);
  } 

  //Featch API Characters
  async function fetchCharacter() {
    props.getCharactersFilter(page, props.search)
  }

  useEffect(() => {
    fetchCharacter();
  }, [page, props.search]);


  return (
      <React.Fragment > 
        <Typography align="center" variant="h3" >Characters</Typography> 
        {props.characters?
        !props.characters.error?<React.Fragment>
            <PaginationHeader page={page} backPage={backPage} nextPage={nextPage} count={props.characters.info.count}/>
            <Paper className={classes.root}>
              <List >
              {props.characters.results.map(value => (
                  <ListItemCustom  handleClick={() => handleClick(value)} row={value} key={value.id} value={value.id} text={value.name} image={value.image}/>))} 
              </List>
          </Paper>
          </React.Fragment>:<Typography align="center" variant="body2" >0 results</Typography>  
          :<LinearProgress/>}
        </React.Fragment> 
  )
}

const mapStateToProps = state => {
    return {
        characters: state.characters.data,
    }
}
export default  withRouter(compose(connect(mapStateToProps, { getCharactersFilter }))(Characters))

