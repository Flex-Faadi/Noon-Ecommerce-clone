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
                <div className="spanText">
                <span>Help Center</span> <br />
                <span>Help.Noon.com</span>
                </div>
              </Col>
              <Col md={6} className="emailsection">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <div className="spanText">
                <span>Email Support</span> <br />
                <span>abc@gmail.com</span>
              </div>
              </Col>
            </Row>
          </div>
        </div>
    </div>
  );
}

export default BottomTagline;
