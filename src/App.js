import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <div className="main-container">
          <Switch>
            <Route exact path="/Rockets">
              <Rockets />
            </Route>
            <Route exact path="/Missions">
              <Missions />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
