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
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Shared/PrivateRoute/PrivateRoute';

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
            <PrivateRoute path="/dashboard">
              <Dashboard ></Dashboard>
            </PrivateRoute>
          </Switch>
          {/* Footer  */}
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
