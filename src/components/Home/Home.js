import React from 'react'
import './home.css'
import homeImg from '../../images/home.jpg'
import Product from '../Product/Product'
import  shortid  from 'shortid';
import ProductImg1 from "../../images/products/1.png";
import ProductImg2 from "../../images/products/2.png";
import ProductImg3 from "../../images/products/3.png";
import ProductImg4 from "../../images/products/4.png";
import ProductImg5 from "../../images/products/5.png";
import ProductImg6 from "../../images/products/6.png";
function Home() {
  return (
<div className="home">
<div className="home-container">
  <img  className="home-image" src={homeImg} alt="" />
  <div className="home-row">
  <Product id={shortid.generate()} image={ProductImg1} price={64} title="loremeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>
  <Product id={shortid.generate()} image={ProductImg2} price={64} title="lorewewreremeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>
  </div>
  <div className="home-row">
    <Product id={shortid.generate()} image={ProductImg3} price={64} title="loredfgfgfgmeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>
    <Product id={shortid.generate()} image={ProductImg4} price={64} title="loijoijlremeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>
    <Product id={shortid.generate()} image={ProductImg5} price={64} title="loremdfdgseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>

  </div>
  <div className="home-row">
    <Product id={shortid.generate()} image={ProductImg6} price={64} title="lojooihiojremeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" rating={5}/>
  </div>
</div>
</div> 
 )
}

export default Home