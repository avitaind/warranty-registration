import './App.css';
import Profile from './components/Profile';
import Settings from './components/Settings';
import WarrantyRegistration from './components/WarrantyRegister';
import Contact from './components/Contact';
import Products from './components/Products';
import Login from './components/auth/Login';
import Registration from './components/auth/Registration';
import RecoverPassword from './components/auth/RecoverPassword';
import Home from './components/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ChangePassword from './components/auth/ChangePassword';

function App() {
  return (
    <div className='container-fluid'>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/recover-password">
              <RecoverPassword />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/warranty-registration">
              <WarrantyRegistration />
            </Route>
            <Route path="/contact-us">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Registration />
            </Route>
            <Route path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
