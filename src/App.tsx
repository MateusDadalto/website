import { StylesProvider } from '@material-ui/styles';
import MyAppBar from './app-bar/AppBar';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Content from './content/Content'

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <div id="theme-div" className="theme-dark">

          <div className=" App">
            <MyAppBar></MyAppBar>

            <Switch>
              <Route path="/test">
                <div>Test</div>
              </Route>
              <Route path="/">
                <Content></Content>
              </Route>
            </Switch>

          </div>
        </div>
      </StylesProvider>

    </BrowserRouter>
  );
}

export default App;
