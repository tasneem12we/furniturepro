import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Posts from "./components/posts";
import Register from "./components/register";
import PageNotFound from "./components/pagenotfound";
import Furniture from "./components/furniture";
import AddFurniture from "./components/addfurniture";
import UpdateFurniture from "./components/updatefurniture";
import Card from "./components/card";
import {Route,Switch, Redirect} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/posts" component={Posts} />
        <Route path="/login" component={Login} />
        <Route path="/furniture" component={Furniture}/>
        <Route path="/furnitures/add" component={AddFurniture}/>
        <Route path="/furnitures/update/:furnitureId" component={UpdateFurniture}/>
        <Route exact path="/" componenet={Card}/>
        <Route path="/Register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
