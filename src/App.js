import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllHikers from './pages/AllHikers';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';


function App() {
  return (
    <Router>
      <Route exact path = '/' component = {LogIn} />
      <Route exact path='/hikers' component={AllHikers} />
      <Route exact path='/signup' component={SignUp} />
    </Router>
  );
}

export default App;
