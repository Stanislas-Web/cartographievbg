import React from 'react';
import 'assets/css/TheContainer.scss'
import ContainerChart from 'containers/ContainerChart';
// import Amchart1 from 'components/graphiques/Amchart1';
// import Amchart2 from 'components/graphiques/AmchartPie';
// import Amchart3 from 'components/graphiques/Amchart3';
import TheArticle from 'containers/TheArticle';
import StructureInfo from 'containers/StructureInfo';

const ContentStructure = () => {
    return ( <div className="parent">
                    <div className="enfant">
                        <ContainerChart content={<StructureInfo/>}/> <br/>
                    </div>
                    <div className="enfant">
                        <ContainerChart content={<TheArticle/>} />   
                    </div>
            </div> );
}
 
export default ContentStructure;

