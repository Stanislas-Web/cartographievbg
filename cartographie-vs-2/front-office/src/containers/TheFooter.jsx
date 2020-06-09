import React from 'react';
import 'assets/css/TheFooter.scss';
import logoPresidence from 'assets/img/ps.jpeg';
const Footer = () => {
    return ( <footer>
                <div>
                    <img src={logoPresidence} alt=""/>
                </div>
                <a target="_blank" href="https://kinshasadigital.com/academy">Designed by Kinshasa Digital Academy</a>
         </footer> );
}
 
export default Footer;
