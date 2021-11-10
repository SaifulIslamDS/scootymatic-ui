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

function App() {
  return (
    <div id="main">
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
