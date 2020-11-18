import React from 'react';
import {BrowserRouter, NavLink, Redirect, Route, Switch} from 'react-router-dom';
import AreaPage from './components/AreaPage';
import BarPage from './components/BarPage';
import ComposedPage from './components/ComposedPage';
import LinePage from './components/LinePage';
import PiePage from './components/PiePage';
import RadarPage from './components/RadarPage';
import RadialPage from './components/RadialPage';
import ScatterPage from './components/ScatterPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink exact strict to="/line">
          Line
        </NavLink>
        <NavLink exact strict to="/bar">
          Bar
        </NavLink>
        <NavLink exact strict to="/pie">
          Pie
        </NavLink>
        <NavLink exact strict to="/composed">
          Composed
        </NavLink>
        <NavLink exact strict to="/area">
          Area
        </NavLink>
        <NavLink exact strict to="/radar">
          Radar
        </NavLink>
        <NavLink exact strict to="/radial">
          Radial
        </NavLink>
        <NavLink exact strict to="/scatter">
          Scatter
        </NavLink>
      </nav>

      <Switch>
        <Route exact strict path="/line" component={LinePage}></Route>
        <Route exact strict path="/bar" component={BarPage}></Route>
        <Route exact strict path="/pie" component={PiePage}></Route>
        <Route exact strict path="/composed" component={ComposedPage}></Route>
        <Route exact strict path="/area" component={AreaPage}></Route>
        <Route exact strict path="/radar" component={RadarPage}></Route>
        <Route exact strict path="/radial" component={RadialPage}></Route>
        <Route exact strict path="/scatter" component={ScatterPage}></Route>
        <Redirect to="/line"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
