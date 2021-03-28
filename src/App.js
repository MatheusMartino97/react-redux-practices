import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Customers from './pages/Customers';
import DogPicture from './pages/DogPicture'
import CatPicture from './pages/CatPicture'
import FailToLogin from './pages/FailToLogin';

function App() {
  return (
    <Switch>
      <Route path="/fail" component={FailToLogin} />
      <Route path="/dog" component={DogPicture} />
      <Route path="/cat" component={CatPicture} />
      <Route path="/customers" component={Customers} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
