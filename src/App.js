import React from "react";
import { Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import "./App2.css";

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <div className="App">
          <Navbar/>
          {/* <Homepage/>
          <Projects/>
          <Skills/> */}
          
        
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/about" component={About}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/projects" component={Projects}/>
        </Switch> 
      </div>
    );
  }
}

export default App;
