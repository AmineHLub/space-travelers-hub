import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchRockets } from './Redux/State/rocketsState';
import Navbar from './components/Navbar';
import './App.css';
import Rockets from './components/pages/Rockets';
import Missions from './components/pages/Missions';
import { fetchMissions } from './Redux/State/MissionsState';

function App() {
  const dispatch = useDispatch();
  const ObjMissions = useSelector((state) => state.missionsReducer);
  const ObjOfRockets = useSelector((state) => state.rocketReducer);
  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
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
              <Missions missions={ObjMissions} />
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
