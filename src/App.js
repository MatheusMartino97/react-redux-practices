import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredCustomers from './pages/RegisteredCustomers';
import FailToLogin from './pages/FailToLogin';

function App() {
  return (
    <Switch>
      <Route path="/fail" component={FailToLogin} />
      <Route path="/registers" component={RegisteredCustomers} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
