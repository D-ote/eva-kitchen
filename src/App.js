import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import LoginPage from './components/loginPage';

function App() {
  return (
    <Router>
     <Switch>
     <Route path="/" exact component={ LoginPage } />  
      <Route path="/dashboard" exact component ={ Dashboard } />  
     </Switch>
    </Router>
  );
}

export default App;
