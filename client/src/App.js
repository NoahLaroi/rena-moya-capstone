import "./styles/App.scss";
import Header from "./components/HeaderAndFooter/Header/Header.js";
import Footer from "./components/HeaderAndFooter/Footer/Footer";
import LandingPage from "./components/landingComponents/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Gallery from "./components/Gallery/Gallery";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path ='/aboutme' component={AboutMe}/>
        <Route path ='/gallery' component={Gallery}/>
        <Route path ='/schedule' component={SchedulePage}/>
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
