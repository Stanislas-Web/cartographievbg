import React from 'react';

const AffichageData = (props) => {
return ( <div key={props.data._id}>{props.data}</div> );
}
 
export default AffichageData;