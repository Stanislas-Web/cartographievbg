import React from 'react';



const ContenairChart = ({content}) => {

    const myStyle = {
        border:"1px solid #DADCE0",
        borderRadius:"10px",
        padding:"12px",
    }
    return ( <div style={myStyle}>
            {content}
            </div> );
}
 
export default ContenairChart;