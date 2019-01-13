import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./screens/Home.js";
import AboutMe from "./screens/AboutMe.js";
import Skills from "./screens/Skills.js";
import Offer from "./screens/Offer.js";
import Portfolio from './screens/Portfolio.js';
import Post from './screens/Post.js';

const Routes = ()=>{
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/o_mnie" component={AboutMe} />
                <Route path="/umiejetnosci" component={Skills} />
                <Route path="/oferta" component={Offer} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/projekty/:post" component={Post} />
            </div>
        </Router>
    )
}

export default Routes;