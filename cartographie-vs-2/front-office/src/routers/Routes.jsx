import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CasViole from 'views/CasViole';
import StructureAccompagnement from 'views/StructureAccompagnement';
import Boutton from 'components/button/Button';

const Routes = () => {
    return ( <BrowserRouter>
        {/* <Boutton  route="/casViole" label = "Cas des vilocences par province"/> <br/> <br/>
        <Boutton  route="/structureAccompagnement" label = "Structures d'Accompagnement"/> */}
            <Switch>
                <Route path="/" component={CasViole} exact/>
                <Route  path="/structureAccompagnement" component={StructureAccompagnement}/>
                <Route  path="/casViole" component={CasViole}/>
            </Switch>   
        </BrowserRouter> );
}
 
export default Routes;


{/* <BrowserRouter>
<Boutton class="bascule2" route="/cas" label = "Cas des vilocences par province"/>
<Boutton class="bascule1" route="/structure" label = "Structure" />
    <Switch>
        <Route path="/cas" component={Carte1}/>
        <Route  path="/structure" component={Carte2}/>
    </Switch>   
</BrowserRouter> */}