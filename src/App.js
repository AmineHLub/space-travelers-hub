import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchRockets } from './Redux/State/rocketsState';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';

function App() {
  const ObjOfRockets = useSelector((state) => state.rocketReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);
  return (
    <Router>
      <Navbar />
      <main>
        <div className="main-container">
          <Switch>
            <Route exact path="/Rockets">
              <Rockets rockets={ObjOfRockets} />
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
