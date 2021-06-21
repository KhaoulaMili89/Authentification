import './App.css';
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Posts from './pages/Posts';
import Navbar from './pages/Navbar';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/Posts' component={Posts}/>
      <PrivateRoute exact path='/Profile' component={Profile}/>

      </Switch>


      
    </div>
  );
}

export default App;
