import { StylesProvider } from '@material-ui/styles';
import MyAppBar from './app-bar/AppBar';
import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <div className="App">
        <MyAppBar></MyAppBar>
      </div>
    </StylesProvider>
  );
}

export default App;
