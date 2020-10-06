import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./pages/home"


const App=({store})=> {
  return (
    <Provider store ={store}>   
     <BrowserRouter>
     <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>
  </BrowserRouter>

  </Provider>
  );
}

export default App;
