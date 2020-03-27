import React from 'react';
import {Link} from "react-router-dom"

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="bg-secondary fixed-bottom">
                    <div className="container">
                        <div className="text-white py-5">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="">
                                        <h5>Quick link</h5>
                                        <ul className="list-unstyled">

                                            <li className="text-white">
                                                <Link className="text-white"  to="/Cart">My Cart</Link>
                                            </li>
                                            <li className="text-white" >
                                                <Link className="text-white"to="/Wishlist">My Wishlist</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="">
                                        <h5>Contact us</h5>
                                        <p>
                                            <strong>Phone:</strong> +923006155950<br/>
                                            <strong>Fax</strong> +1234567890
                                            
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="float-right">
                                     <h5>Social Links</h5>
                                     <div className="">
                                         <Link className="text-white mr-4"  to="http://facebook.com/cutestores">
                                             <i className="fab fa-facebook"></i>
                                         </Link>
                                         <Link className="text-white mr-4" to="http://twitter.com/cutestores">
                                             <i className="fab fa-twitter"></i>
                                         </Link>
                                         <Link className="text-white mr-4" to="http://youtube.com/cutestores">
                                             <i className="fab fa-youtube"></i>
                                         </Link>
                                         <Link className="text-white mr-4"to="http://instagram.com/cutestores">
                                             <i className="fab fa-instagram"></i>
                                         </Link>
                                     </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="text-white text-centre">
                                 All right reserved to@
                                <Link to="/">
                                    My-ecommerce-app
                                </Link>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;