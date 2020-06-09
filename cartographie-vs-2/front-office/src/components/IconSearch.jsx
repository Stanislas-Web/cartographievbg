import React from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'assets/css/IconSearch.scss';

const IconSearch = () => {
    const myStyle ={
        position:"relative",
        color:"#80868B",
        fontSize:"15px",
        right:"380px",
        bottom:"25px"
    }
    return ( < FontAwesomeIcon style={myStyle} className="icon" icon= {faSearch}/ > );
}
 
export default IconSearch;
