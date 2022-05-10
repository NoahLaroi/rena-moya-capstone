import "./styles/App.scss";
import Header from "./components/HeaderAndFooter/Header/Header.js";
import Footer from "./components/HeaderAndFooter/Footer/Footer";
import LandingPage from "./components/landingComponents/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Policies from "./components/Policies/Policies";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/LoginComponents/Login";
import Appointments from "./components/LoginComponents/Appointments";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path ='/aboutme' component={AboutMe}/>
        {/* <Route path ='/gallery' component={Gallery}/> */}
        <Route path='/policies' component={Policies}/>
        <Route path ='/schedule' component={SchedulePage}/>
        <Route path='/admin-login' component={Login}/>
        <Route path='/appointment-page' component={Appointments}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
