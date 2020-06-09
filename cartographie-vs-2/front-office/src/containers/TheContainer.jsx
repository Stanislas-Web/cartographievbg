import React from 'react';
import Header from 'containers/TheHeader';
import Footer from 'containers/TheFooter';
import Container from 'containers/TheContainer';
import BarreRecherche from 'components/BarreRecherche';
import Boutton from 'components/button/Button';
import Carte1  from 'components/cartes/Carte1';
import Carte2  from 'components/cartes/Carte2';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Routes from 'routers/Routes';
const TheContainer = () => {
    return ( <>
        <Header/>
        {/* <BrowserRouter>
        <Boutton class="bascule2" route="/cas" label = "Cas des vilocences par province"/>
        <Boutton class="bascule1" route="/structure" label = "Structure" />
            <Switch>
                <Route path="/cas" component={Carte1}/>
                <Route  path="/structure" component={Carte2}/>
            </Switch>   
        </BrowserRouter>
        <BarreRecherche/>
        <Container/> */}
        {/* <CasViole/> */}
        <Routes/>
        <Footer/>
    </> );
}
 
export default TheContainer;