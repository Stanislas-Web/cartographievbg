import React from 'react';
import Carte1 from 'components/cartes/Carte1';

const Banner = () => {

    const myStyle ={
        width : "100%",
        background: "#f7F7F7",
        color:"black",
        fontFamily: "Roboto",
        fontWeight: "300",
        textAlign:"center",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize: "36px"
    }

    return ( 
        <div style={myStyle}>
            <Carte1/>
        </div>
     );
}
 
export default Banner;