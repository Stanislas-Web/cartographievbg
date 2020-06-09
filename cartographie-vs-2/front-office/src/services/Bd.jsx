import React,{Component} from 'react';
import AffichageData from 'components/AffichageData';
import axios from 'axios';

class Bd extends Component {
    state = { VBG: [] };
  
    componentDidMount() {
      axios
        .get(
          "https://cartographievbg.herokuapp.com/api/vbg"
        )
        .then(res => this.setState({ VBG: res.data }))
        .catch(erreur => console.log(erreur));
    }
    render() { 
        return ( 


                // <AffichageData data={this.state.VBG}/>
                <div>
                    {
                        // this.state.VBG.map(vbg=>
                        //     <div key={vbg._id}>
                        //         {}
                        //     </div>
                        // )
                    }

                    {/* this.state.apprenants.map(person => <Card style={this.mystyle}
                    header={person.prenom}
                    meta={person.nom}
                    description={person.poste}                    
                />)} */}

                </div>
         );
    }
}
 
export default Bd;