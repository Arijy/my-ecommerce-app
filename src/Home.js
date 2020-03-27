import React from "react";
import Navbar from "./Components/Navbar";
// import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
// import { Link } from "react-router-dom";
import "./homeAssets/home.css";
import slide1 from "./homeAssets/slide1.jpg";
import slide2 from "./homeAssets/slide2.jpg";
import slide3 from "./homeAssets/slide3.jpg";
import paymentIcon from "./homeAssets/payment.png";
import returnIcon from "./homeAssets/return.png";
import trustIcon from "./homeAssets/trust.png";
import HomeItem from "./homeItem";
import axios from 'axios'
class Home extends React.Component {
  constructor(props){
     super(props)
     this.state = {
       animals:[]
     }
  }
  componentDidMount(){
         let self = this;
         axios.get('http//:localhost:4000/animals')
         .then((response) =>{
          self.setState(
             {
           animals:response.data
             } )
         } )
  }
    render() {
    return (
      <div>
        <Navbar />
        <section className="first-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <Sidebar/>
              </div>
              <div className="col-sm-8">
                                <div className="card">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
 
                                <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                      <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={slide1} className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={slide2}className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src={slide3} className="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                                </div>
                   
              </div>

            </div>
                   </div>
                     </section>
                     <section className="second-section my-5 py-5 bg-white">      
                     <div className="container">
                       <div className="row">
                         <div className="col-sm-4">
                           <div className="text-centre">
                            <img className="mb-3" src={paymentIcon} alt="paymentIcon"/>
                            <div className="">
                              <h4>Easy Payment</h4>
                              <p>The payment pocess is very easy to navigate and you can do it in some few clicks away.</p>
                            </div>
                           </div>
                         </div>
                         <div className="col-sm-4">
                         <div className="text-centre">
                            <img className="mb-3"   src={returnIcon} alt="returnIcon"/>
                            <div className="">
                              <h4>Easy Return</h4>
                              <p>The return pocess is very easy to navigate and you can do it in some few clicks away.</p>
                            </div>
                           </div>
                         </div>
                         <div className="col-sm-4">
                         <div className="text-centre">
                            <img className="mb-3"    src={trustIcon} alt="trustIcon"/>
                            <div className="">
                              <h4>Trusted Quality</h4>
                              <p>The products of trusted quality because we have reviews from millions of happy customers</p>
                            </div>
                           </div>
                         </div>
                       </div>
                     </div>
                     </section>
                    <section className = "third-section">
                      <div className= "row">

                        {
                          this.state.animals.map((animal,index) => 
                          <div className="p-5">
                            <h1>{animal.name}</h1>
                            <h3>{animal.color}</h3>
                          </div>)
                        }
                      <HomeItem name='Goat' color='Red'/>
                      <HomeItem name='Dog' color ='Black'/>
                      <HomeItem name='Cat' color='White'/>
                      </div>
                    </section>
                    

        {/* <Body /> */}
        <Footer />
      </div>
    )
  }
}
export default Home;