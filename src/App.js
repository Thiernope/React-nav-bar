import './App.css';
import Sidebar from "./components/Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Angular  from "./pages/Angular"
import Html from "./pages/Html"
import Javascript  from "./pages/Javascript"
import ReactCourse from "./pages/ReactCourse"
import CSS from "./pages/CSS"
import Node from "./pages/Node"
import Vue from "./pages/Vue"
import "./App.css"
function App() { 
  return (
    <div>
      
    <Router>
    <Sidebar />
     <Switch>
     <Route path ="/html" exact component={Html}/>
     <Route path ="/css" component={CSS}/>
     <Route path ="/javascript" component={Javascript}/>
     <Route path ="/react" component={ReactCourse}/>
     <Route path ="/angular" component={Angular}/>
     <Route path ="/vue" component={Vue}/>
     <Route path ="/node" component={Node}/>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
