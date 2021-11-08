import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Rockets">
          <Rockets />
        </Route>
        <Route exact path="/Missions">
          <Missions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
