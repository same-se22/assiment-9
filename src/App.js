import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login/Login';
import Header from './Components/Shared/Header/Header';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Components/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Components/Shared/Footer/Footer';
import Contact from './Components/Home/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/booking/:serviceId">
        <Booking></Booking>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
          <Footer></Footer>
      </Router>  
        </AuthProvider> 
    </div>
  );
}

export default App;
