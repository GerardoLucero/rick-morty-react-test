import React from 'react'
import Theme from './containers/Theme'
import CssBaseline from '@material-ui/core/CssBaseline'
//Router
import { Router , Route, Switch } from 'react-router-dom'
//Store
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'
import { initialState } from "./config/initialState"
//History
import { createHashHistory } from 'history';



//Screens 
import Home from './screens/Home'
import Details from './screens/Details'

const history = createHashHistory()
const enhancer = applyMiddleware(thunk)
const store = createStore(createRootReducer, initialState, enhancer)
function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Theme>
            <CssBaseline />
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/Details" component={Details}/>
              </Switch>
          </Theme>    
        </Router>
    </Provider>
  )
}

export default App
