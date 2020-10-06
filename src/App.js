import React,{Suspense,lazy} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import {Loader} from "./component";
const Home =lazy(()=> import ('./pages/home'))

const App=({store})=> {
  return (
    <Provider store ={store}>   
     <BrowserRouter>
  <Suspense fallback={<Loader/>}>
     <Switch>
    <Route exact path="/" component={Home}/>
  </Switch>
  </Suspense>
  </BrowserRouter>
  </Provider>
  );
}

export default App;
