import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import LoginPage from './components/loginPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={ LoginPage } />  
      <Route path="/dashboard" exact component ={ Dashboard } />  
    </Router>
  );
}

export default App;
