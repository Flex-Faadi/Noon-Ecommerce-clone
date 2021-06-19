import React from "react";
import { Row, Col } from "react-bootstrap";
function BottomTagline() {
  return (
    <div>
        <div className="bottomDiv ">
          <div className="leftDiv mt-3">
            <span>We're Always Here To Help You</span> <br />
          </div>
          <div className="rightDiv">
            <Row>
              <Col md={6} className="helpsection">
                <i className="fa fa-info-circle" aria-hidden="true"></i>
                <span>Help Center</span> <br />
                <span>Help.Noon.com</span>
              </Col>
              <Col md={6} className="emailsection">
              <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>Email Support</span> <br />
                <span>abc@gmail.com</span>
              </Col>
            </Row>
          </div>
        </div>
    </div>
  );
}

export default BottomTagline;
