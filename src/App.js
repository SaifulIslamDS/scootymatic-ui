import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home/Home/Home';
import Header from './Shared/Header/Header';
import Explore from './Pages/Explore/Explore/Explore';
import Footer from './Shared/Footer/Footer';
import Dashboard from './Admin/Dashboard/Dashboard';
import Login from './Admin/Login/Login';
import Register from './Admin/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div id="main">
      <AuthProvider>
        <Router>
          {/* Header  */}
          <Header></Header>
          {/* Routes */}
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard ></Dashboard>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
          {/* Footer  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
