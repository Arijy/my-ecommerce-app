 
import React from "react";
 
import { Switch, Route } from "react-router-dom";
 
import Home from "./Home";
 
import AppContext from "./AppContext";
 
import { getProducts, getFashions , getHouseholds ,getPhones,getComputers,getElectronics} from "./repo";
 
import Cart from "./Pages/Cart";
import Fashions from "./Pages/fashions";
import Households  from "./Pages/households";
import Phones from "./Pages/phones";
import Computers from "./Pages/computers";
import Electronics from "./Pages/electronics";
class Routes extends React.Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      products: [],
      fashions:[],
      households:[],
      phones:[],
      computers:[],
      electronics:[],
      
 
      cart: JSON.parse(localStorage.getItem("cart")) || [],
 
      addToCart: (product, qty) => {
 
        let cart = this.state.cart;
 
        cart.push({
 
          product: product,
 
          qty_added: qty
 
        });
 
        this.setState({
 
          cart: cart
 
        });
 
        localStorage.setItem("cart", JSON.stringify(cart));
 
      },
 
 
      removeFromCart: id => {
 
        let cart = this.state.cart,
 
          newCart = [];
 
 
        cart.map(CartItem => {
 
          if (CartItem.product.id !== id) newCart.push(CartItem);
 
        });
 
        this.setState({
 
          cart: newCart
 
        });
 
        localStorage.setItem("cart", JSON.stringify(newCart));
 
      },
 
      clearCart: () => {
 
        localStorage.clear();
 
        this.setState({ cart: [] });
 
        if ({ cart: [] } === null) {
 
        }
 
        alert("cart has been cleared successfully");
 
      }
 
    };
 
  }
 
  componentDidMount() {
 
    getProducts().then(products => {
 
      this.setState({ products });
 
    });
    getFashions().then(fashions => {
 
      this.setState({ fashions });
 
    });
    getHouseholds().then(households => {
 
      this.setState({ households });
 
    });
    getPhones().then(phones => {
 
      this.setState({ phones});
 
    });
    getComputers().then(computers => {
 
      this.setState({ computers});
 
    });
    getElectronics().then(electronics => {
 
      this.setState({ electronics });
 
    });
 
  }
 
  render() {
 
    return (
 
      <AppContext.Provider value={this.state}>
 
        <Switch>
 
          <Route exact path="/" component={Home}></Route>
 
          <Route exact path="/cart" component={Cart}></Route>
 
         <Route exact path="/fashions" component={Fashions}></Route>

         <Route exact path="/household" component={Households}></Route>

         <Route exact path="/phones" component={Phones}></Route>

         <Route exact path="/computers" component={Computers}></Route>

         <Route exact path="/electronics" component={Electronics}></Route>
        </Switch>
 
      </AppContext.Provider>
 
    );
 
  }
 
}
 
export default Routes;