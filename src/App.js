import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Results from './pages/Results';
import Entities from './pages/Entities'

function App() {
  return (
    <Switch>
      <Route path="/entities/:job" render={(props) => <Entities {...props}/>} />
      <Route path="/results" component={Results} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
