import React from 'react'
//Material-UI
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


//Control pagination state
function PaginationHeader(props) {
  const { page, backPage, nextPage, count } = props;
  return (
    <Grid container  style={{ padding: 10 }}>
        <Grid item xs={4} >
            <Button fullWidth variant="contained" color="secondary" disabled={page===1} onClick={backPage}> Back</Button>      
        </Grid>
        <Grid item xs={4} >
            <Typography align="center"  variant="h6" > Page: {page} / {Math.ceil(count/20)} </Typography>
        </Grid>
        <Grid item xs={4} >
            <Button fullWidth variant="contained" color="secondary" disabled={page===Math.ceil(count/20)} onClick={nextPage}> Next</Button>
        </Grid>
    </Grid>
  )
}

export default PaginationHeader;