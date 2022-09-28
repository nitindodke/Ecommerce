import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
   <footer id="footer">
    <div class="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and mobile phone</p>
        <img src={playStore} alt="playstore"></img>
        <img src={appStore} alt="Appstore"></img>
    </div>
    <div class="midFooter">
        <h1>ECCOMERCE</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2022 &copy; MeAbhiSingh</p>
    </div>
    <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href='http://instagram.com/meabhisingh'>Instagram</a>
        <a href='http://youtube.com/6packprogrammer'>Youtube</a>
        <a href='http://facebook.com/meabhisingh'>Facebook</a>
    </div>
   </footer>
  )
}

export default Footer;