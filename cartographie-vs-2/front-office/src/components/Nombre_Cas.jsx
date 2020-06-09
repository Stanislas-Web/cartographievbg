import  React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import 'assets/css/Nombre_Cas.scss'

const Cas = ()=>{
    return (
        <div className="cas">
            <h4 className="titre">Congo Central</h4>
            <div className="divise">
                <div className="div1">
                    <h4>Cas de viol signalés</h4>
                    <h4>206.049</h4>
                </div>
                <div className="div2">
                    <h4>Sructures d'encompagnement</h4>
                    <h4>23</h4>
                </div>
            </div>
        </div>
    )
}

export default Cas;