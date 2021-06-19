import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NiveaBlock() {
  return (
    <div>
      <div className="mt-5 mb-3 niveapageimg container-fluid">
        <Row>
          <Col xs={6} md={6}>
            <img src="https://k.nooncdn.com/cms/pages/20210522/f99e22b603ec3e0cbf9fc924d5c54f89/en_mega-02.png" alt="nivaimg" width="100%" />
          </Col>
          <Col xs={6} md={6}>
            <img src="https://k.nooncdn.com/mon/1624046671005-ckq2rgfbx0llzrhr0pmadl3is.png" alt="nivaimg" width="100%" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NiveaBlock;
