import React from "react";
import {Switch,Route }from "react-router-dom"
import Home from "./Home";
import AppContext from "./AppContext";
import { getProducts } from "./repo";
class Routes extends React.Component{
    constructor(){
        super()
        this.state= {
            products:[]
        }
    }
    componentDidMount(){
        getProducts().then((products) =>{
          this.setState({products
         })
        })
 }
    render(){
        return(
           <AppContext.Provider value={this.state}>
                <Switch>
                
                <Route exact path="/"component={Home} ></Route>
                
                </Switch>  
           </AppContext.Provider>
        )
    }
    
}
export default Routes;
