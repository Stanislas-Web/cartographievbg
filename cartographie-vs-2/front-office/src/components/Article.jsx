import React from "react";
import "assets/css/Article.scss";
import { CardDeck, Card, Button, Row, Col, Table } from "react-bootstrap";
import imgArticle from "assets/img/chantal.jpg";

const Article = () => {
  const imgStyle = {
//     width: "170px",
    height: "117px",
    borderRadius: "10px",
  };
  return (
    <div className="parentArticle">
      <Row>
        <Col sm={12}>
          <Card>
            <Card.Img
              variant="top img-fluid"
              src={imgArticle}
              style={imgStyle}
            />
            <Card.Body>
              <Card.Text>
              Mme Chantal Yelu reçoit une centaine de femmes venue déposer un
                mémorandum contre Denise Dusauchoy
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Article;
