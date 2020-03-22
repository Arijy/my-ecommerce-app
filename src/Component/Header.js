import React from 'react';
import Logo from './Logo.png'
import './index.css'
class Header extends React.Component
{
    render()
    {

        return(
            <div>
               <nav className="navbar fixed-top shadow-sm bg-white navbar-expanded-lg">
                 <div className="container">
                     <div className="row">
                         <div className="col-sm-2">
                            <a className="" href="#">
                                <img className="w-100" src={Logo} alt="Logo"/>
                            </a>
                         </div>
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8">
                               <button className="navbar-toggler" type="button" data-toggler="collapse" data-target="#navbarcontent" aria-expanded="false">
                                   <i className="header-icon fas fa-bars"></i>
                               </button>
                        <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                        <div className="col=xs-4">

                            <div className="dropdown">
                            <a href="#" className="headertext" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true"aria-expanded="false">
                                <div className="d-inline-flex">
                                    <div className="icon-wrap">
                                        <i className="header-icon fas fa-user"/>
                                    </div>
                                    <div className="text-wrap">
                                    <span className="small round badge badge-secondary">0</span>
                                    <div>Sign In</div>
                                    <i className="fes fa-caret-down"/>
                                </div>
                                </div>
                            </a> 
                            <div className="dropdown-menu">
                                <form className="px-4 py-3">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="email"></input>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="Password" className="form-control" placeholder="Password"></input>

                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign In</button>
                                </form>
                                <hr/>
                                <a className="dropdown-item" href="#" >Don't have an account?Sign up</a>
                            </div>

                            </div>
                            </div>
                        <div className="col=xs-4">
                        <a href="#" className="headertext">
                        <div className="d-inline-flex">
                        <div className="icon-wrap">
                                        <i className="header-icon fas fa-shopping-cart"/>
                                    </div>
                                <div className="text-wrap">
                                    <span className="small round badge badge-secondary">0</span>
                                    <div>Cart</div>
                                </div>
                                </div>
                            </a>
                        </div>
                        <div className="col=xs-4">
                        <a href="#" className="headertext">
                        <div className="d-inline-flex">
                        <div className="icon-wrap">
                                        <i className="header-icon fas fa-heart"/>
                                    </div>
                                    <div className="text-wrap">
                                    <span className="small round badge badge-secondary">1</span>
                                    <div>Wishlist</div>
                                </div>
                                </div>
                            </a>
                                </div>
                             </div>
                      </div>
                     </div>
                 </div>
               </nav>
         </div>
     )
    }
}
export default Header;