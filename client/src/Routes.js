import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from "./screens/Home.js";
import AboutMe from "./screens/AboutMe.js";
import Skills from "./screens/Skills.js";
import Offer from "./screens/Offer.js";
import Portfolio from './screens/Portfolio.js';
import Post from './screens/Post.js';
import Page404 from './screens/Page404.js';

const Routes = ()=>{
    return(
        <Router onUpdate={() => window.scrollTo(0, 0)}>
            <div> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/o_mnie" component={AboutMe} />
                    <Route path="/umiejetnosci" component={Skills} />
                    <Route path="/oferta" component={Offer} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/projekty/:post" component={Post} />
                    <Route path="*" component={Page404} />
                    <Redirect to="/404"/>                    
                </Switch>               
            </div>
        </Router>
    )
}

export default Routes;