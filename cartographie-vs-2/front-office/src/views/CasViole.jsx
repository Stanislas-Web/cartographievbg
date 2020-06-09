import React from "react";
import VbgDataService from "../services/api/vbg.service";
import { Card, Table, Row, Col, Form } from "react-bootstrap";
import Boutton from 'components/button/Button';
import MyDataTable from "../components/MyDataTable";
import "../assets/css/CasViol.scss";

import {
  groupeByAttribut,
  groupeByProvince,
  getStatByYear,
  getLabelProvice,
  trieObject
} from "../services/helpers/api.helper";
import CarteCasVbg from "components/cartes/CarteCasVbg";
import TheArticle from "containers/TheArticle";
import AmchartPie from "../components/graphiques/AmchartPie";

class CasViole extends React.Component {
  state = {
    data: [],
    dataChartsPie: {},
    dataMaps: [],
    charts: [],
    dataChartProvince: [],
    dataTabProvince: [],
    provinces: [],
  };
  componentWillMount() {
    VbgDataService.getAll()
      .then((res) => {
        this.setState({
          data: res.data,
          dataChartsPie: {
            typeViolence: (groupeByAttribut(res.data, "type_violence")),
            // "Par Provice" :  groupeByAttribut(res.data, "type_violence"),
            auteurViol: (groupeByAttribut(res.data, "auteur_viol")),
            trancheAgeVictime: (groupeByAttribut(
              res.data,
              "tranche_age_victime"
            )),
            sexeVictime: groupeByAttribut(res.data, "sexe_victime"),
          },
          charts: [
            "typeViolence",
            "auteurViol",
            "trancheAgeVictime",
            "sexeVictime",
          ],
          dataChartProvince: [(groupeByProvince(res.data))],
          dataTabProvince: [getStatByYear(groupeByProvince(res.data))],
          provinces : getLabelProvice((groupeByProvince(res.data))).sort()
        });
      })
      .catch((erreur) => console.log(erreur));
  }
  render() {
    return (
      <>
        <div className="container-fluide">
        <Boutton route="/structureAccompagnement" label="Structures d'accompagnements"/>
          <div className="row">
            <div className="col-sm-12">
              <div className="maps">
                <CarteCasVbg />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="d-flex justify-content-center">
              <div className="">
                <Form.Group>
                  <Form.Control as="select" size="lg" className="select-province">
                  <option value="All" >République Démocratique du Congo</option>
                    {this.state.provinces.map((province)=>{
                      return(
                        <option value={province}>{province}</option>
                      )
                    })}
                  </Form.Control>
                  <br />
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-9">
                <Card>
                  <Card.Body>
                    {/* <div className="row">
                      <div className="col-sm-12">
                        <Card>
                          <Card.Body>
                            <Card.Title>KONGO CENTRAL</Card.Title>
                            <Card.Text>
                              With supporting text below as a natural lead-in to
                              additional content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                    <br /> */}
                    <div className="row">
                    <div className="col-md-8">
                        <Card>
                          {/* <Card.Header as="h5">CAS</Card.Header> */}
                          <Card.Body>
                            {this.state.dataTabProvince.map((element) => {
                              return <MyDataTable data={element} />;
                            })}
                          </Card.Body>
                        </Card>
                      </div>
                      <div className="col-md-4">
                        <Row>
                          {/* <Col md={12}>
                          <Card>
                            <Card.Header as="h5">Graphiques</Card.Header>
                            <Card.Body>
                              <Row>
                                {this.state.charts.map((chart) => {
                                  return (
                                    <Col md={6}>
                                      <Card>
                                        <Card.Header
                                          as="h5"
                                          className="text-center"
                                        >
                                          {chart}
                                        </Card.Header>
                                        <Card.Body>
                                          <AmchartPie
                                            dataFormated={
                                              this.state.dataChartsPie[chart]
                                            }
                                            tagName={chart}
                                          />
                                        </Card.Body>
                                      </Card>
                                      <br />
                                    </Col>
                                  );
                                })}
                              </Row>
                            </Card.Body>
                          </Card>
                        </Col> */}
                        </Row>
                      </div>
                     
                    </div>
                    <br />
                    <Row>
                      <Col md={12}>
                        {this.state.dataChartProvince.map((chart) => {
                          return (
                            <Card>
                              <Card.Header as="h5" className="text-center">
                                Categorie Par Province
                              </Card.Header>
                              <Card.Body>
                                <AmchartPie
                                  dataFormated={this.state.dataChartProvince[0]}
                                  tagName="statParProvince"
                                  height="450px"
                                />
                              </Card.Body>
                            </Card>
                          );
                        })}
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col md={12}>
                        <Card>
                          <Card.Header as="h5">Graphiques</Card.Header>
                          <Card.Body>
                            <Row>
                              {this.state.charts.map((chart) => {
                                return (
                                  <Col md={6}>
                                    <Card>
                                      <Card.Header
                                        as="h5"
                                        className="text-center"
                                      >
                                        {chart}
                                      </Card.Header>
                                      <Card.Body>
                                        <AmchartPie
                                          dataFormated={
                                            this.state.dataChartsPie[chart]
                                          }
                                          tagName={chart}
                                        />
                                      </Card.Body>
                                    </Card>
                                    <br />
                                  </Col>
                                );
                              })}
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-sm-3">
                <TheArticle />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CasViole;
