import React from 'react';
import Carte2 from 'components/cartes/Carte2';
import BarreRecherche from 'components/BarreRecherche';
import ContentStructure from 'containers/ContentStructure';
import Boutton from 'components/button/Button';
import AffichageData from 'components/AffichageData';
import Bd from 'services/Bd';
const StructureAccompagnement = (props) => {
    return ( <>
        <Boutton route="/casViole" label="Cartographie des VBG"/>
        <Carte2/>
        <BarreRecherche/>
        {/* <AffichageData/> */}
        <Bd/>
        <ContentStructure/>
        













    </> );
}
 
export default StructureAccompagnement;
