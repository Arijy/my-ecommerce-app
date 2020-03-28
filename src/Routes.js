 
import React from "react";
 
import { Switch, Route } from "react-router-dom";
 
import Home from "./Home";
 
import AppContext from "./AppContext";
 
import { getProducts } from "./repo";
 
import Cart from "./Pages/Cart";
 
class Routes extends React.Component {
 
  constructor() {
 
    super();
 
    this.state = {
 
      products: [],
 
 
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
 
  }
 
  render() {
 
    return (
 
      <AppContext.Provider value={this.state}>
 
        <Switch>
 
          <Route exact path="/" component={Home}></Route>
 
          <Route exact path="/cart" component={Cart}></Route>
 
        </Switch>
 
      </AppContext.Provider>
 
    );
 
  }
 
}
 
export default Routes;