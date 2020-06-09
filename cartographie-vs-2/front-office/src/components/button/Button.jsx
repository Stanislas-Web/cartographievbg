import React from "react";
import { Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';
import "assets/css/Button.scss"

const Boutton = (props)=>{
    return(
    <Button variant="dark" className="bascule"><NavLink to={props.route}>{props.label}</NavLink></Button>
    )
}

export default Boutton;