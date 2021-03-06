import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';
import ParticlesContainer from "./components/ParticlesContainer";
import ParticlesBg from "particles-bg";

const App = () => {
  return (
    <Router>
      <ParticlesBg  type="cobweb" bg={true}/>
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App;