import React from "react";
import { CardDeck, Card, Button, Row, Col ,Table } from "react-bootstrap";
import "assets/css/StructureInfo.scss";

const StructureInfo = () => {
  return (
    //             <div className = "voila">
    //             <CardDeck>
    //   <Card>
    //     <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E1BAQErsQVSDC16gg/company-background_10000/0?e=2159024400&v=beta&t=ma5wDqvyfFJYE4iJ8q4SN0wgjAb_WZ3RJbMNmm7dtbo" />
    //     <Card.Body>
    //       <Card.Title>Hj Kisangani</Card.Title>
    //       <Card.Text>
    //       <p>This is a wider card with supporting text below as a natural lead-in to
    //         additional content. This content is a little bit longer.</p>
    //       </Card.Text>
    //       <p><strong>Adresse :</strong> 375, colonnel mujiba</p>
    //       <p><strong>Contact</strong>: +243222222222</p>
    //     </Card.Body>
    //   </Card>
    // </CardDeck>
    //         </div>
    //         );

    // import React from 'react';
    // import Bd from 'services/Bd';

    // const StructureInfo = () => {
    //     return ( <div>
    //             <p>
    //                <Bd/>
    //                  </p>
    //     </div> );

    <Card>
      <Card.Img
        variant="top"
        src="https://www.info-afrique.com/wp-content/uploads/2020/01/Texaf-campus-digital.jpg"
      />
      <Card.Body>
        <Row>
          <Col md={12}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th colSpan="2" className="text-center">
                    <h5>HGR Saint Joseph</h5>
                    Centre féminin Marie Antoinette, Dr Kubota Douce
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>Type</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
                <tr>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody> */}
            </Table>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default StructureInfo;
