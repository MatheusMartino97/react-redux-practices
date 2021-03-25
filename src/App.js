import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import RegisteredCustomers from './pages/RegisteredCustomers';
import DogPicture from './pages/DogPicture'
import FailToLogin from './pages/FailToLogin';

function App() {
  return (
    <Switch>
      <Route path="/fail" component={FailToLogin} />
      <Route path="/success" component={DogPicture} />
      <Route path="/customers" component={RegisteredCustomers} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
