import logo from './logo.svg';
import { Route, Router, Switch, BrowserRouter,Link, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login';
import AboutUs from './AboutUs';
import Home from './Home';
import FAQ from './FAQ';
import Alumni from './Alumni';
import Team from './Team';
import Register from './Register';
import ProjectDisp from './Projectdisp';
import {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Projectcard from './Projectcard';


function App() {
  // const [projects, setProjects] = useState([]);
  //    useEffect(()=>{
  //        fetch("http://127.0.0.1:8000/api/projects/")
  //           .then(res => res.json())
  //           .then((res)=>{
  //               setProjects(res)
  //           })
  //    },[projects])

  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path="/"><Redirect to="/Home" /></Route>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Projects" component={ProjectDisp} />
        <Route exact path="/Projectest" component={Projectcard} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Alumni" component={Alumni} />
        {/* <Route exact path="/Contactus" component={ContactUs} /> */}
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Register" render={() => {
            return (
              <>
              <Register />
              </>
            )
          }}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
