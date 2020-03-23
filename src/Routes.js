import React from "react";
import {Switch,Route }from "react-router-dom"
import Home from "./Home";


class Routes extends React.Component{
    render(){
        return(
            <Switch>
                
                <Route exact path="/"Component={Home} ></Route>
                
            </Switch>
        )
    }
    
}
export default Routes;
