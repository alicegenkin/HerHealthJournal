import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Register from './components/register/Register';
import './App.css';
import Goals from  './components/goals/Goals' 
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register} />
          <Route path='/goals' component={Goals} />
          <Route path='/login' component={Login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;

