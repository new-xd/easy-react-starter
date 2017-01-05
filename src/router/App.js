import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import store from '../store'
import { LOGIN, ROOT, MAIN, SECOND, THIRD, FORTH } from './Links'
import PageWrapper from '../components/PageWrapper'
import Entry from '../pages/Entry'
import Login from '../pages/Login'
import Main from '../pages/Main'
import SamplePage from '../components/SamplePage'

const history = syncHistoryWithStore(hashHistory, store)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={history}>
            <Route path={ROOT} component={PageWrapper}>
              <IndexRoute index={0} component={Entry} />
              <Route index={0} path={LOGIN} component={Login} />
              <Route index={1} path={MAIN} component={Main} />
              <Route index={2} path={SECOND} component={SamplePage} title="second" next={THIRD} />
              <Route index={3} path={THIRD} component={SamplePage} title="third" next={FORTH} />
              <Route index={4} path={FORTH} component={SamplePage} title="forth" />
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
