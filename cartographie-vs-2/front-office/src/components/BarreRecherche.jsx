import React from 'react';
import 'assets/css/BarreRecherche.scss'
import IconSearch from 'components/IconSearch';

const BarreRecherche = () => {
    return ( 
            <div className="divInput">
            <form action="">
                    <input type="text" placeholder="Recherche..."/>
                    <IconSearch className="icon"/>


            </form>    
            </div> );
}
 
export default BarreRecherche;