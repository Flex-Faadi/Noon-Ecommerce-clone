import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
function MegaDeals() {
  return (
    <div>
      <div className="container-fluid main_mega_div">
        <div className="deals">
          <h1 className="">Mega Deals</h1>
          <div className="hours ">
            <span>🕕</span>
            <span>24 Hours Only!</span>
          </div>
        </div>
        <div className="megaCards">
          <Row>
            <Col xs={6} md={3}>
              <MegaCards
                title={"Laptop"}
                img={
                  "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBtYWNib29rfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                text={"Apple Macbook Air 13 512GB"}
                price={"4259 AED"}
              />
            </Col>
            <Col xs={6} md={3}>
              <MegaCards
                title={"Mobile"}
                img={
                  "https://images.unsplash.com/photo-1600721502759-006dd10d46ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b25lcGx1c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                text={"One Puls Pro Dual nord max"}
                price={"448 AED"}
              />
            </Col>
            <Col xs={6} md={3}>
              <MegaCards
                title={"Shoes"}
                img={
                  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                text={"Sports Shoes And sneakers"}
                price={"199 AED"}
              />
            </Col>
            <Col xs={6} md={3}>
              <MegaCards
                title={"Apple Watch deals"}
                img={
                  "https://images.unsplash.com/photo-1548192386-c9bb4224f0a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjB3YXRjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
                text={"Apple watch ss-e mm pro ultra"}
                price={"1,149 AED"}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

function MegaCards({ title, img, text, price }) {
  return (
    <>
      <div className="main-mega-cards mb-3 border-darken-3">
        <Card>
          <Card.Header className="text-center p-1 m-0 cardTitle">
            {title}
          </Card.Header>
          <Card.Body className="pb-2">
            <img src={img} alt="image" width="100%" />
            <Card.Text className="cardText pt-2">{text}</Card.Text>
            <Button variant="outline-info">{price}</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MegaDeals;
