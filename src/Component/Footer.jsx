import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="border-top bg-white myMainFooter">
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6 className="heading">ELECTRONICS</h6>
                                <li>Mobiles</li>
                                <li>Tablets</li>
                                <li>Laptops</li>
                                <li>Home Appliances</li>
                                <li>Camera , Photo &nbsp; Video</li>
                                <li>Television</li>
                                <li>Video Games</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled ">
                                <h6 className="heading">FASHION</h6>
                                <li>Women's Fashion</li>
                                <li>Men's Fashion</li>
                                <li>Girl's Fashion</li>
                                <li>Boy's Fashion</li>
                                <li>Watches</li>
                                <li>Jewellery</li>
                                <li>Women's Handbags</li>
                                <li>Men's Eyewears</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6 className="heading">HOME AND KITCHEN</h6>
                                <li>Bath</li>
                                <li>Home Decor</li>
                                <li>Kitchen &amp; Dining</li>
                                <li>Tools &amp; Home Improvement</li>
                                <li>Audio &amp; Video</li>
                                <li>Furniture</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6 className="heading">BEAUTY</h6>
                                <li>Fragrance</li>
                                <li>Make-up</li>
                                <li>Haircare</li>
                                <li>Skincare</li>
                                <li>Personal Care</li>
                                <li>Tool &amp; Accessories</li>
                                <li>Men's Groming</li>
                                <li>Health Care Essentials</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6 className="heading">BABY</h6>
                                <li>Strollers &amp; Prams</li>
                                <li>Car Seats</li>
                                <li>Feeding</li>
                                <li>Bathing &amp; Skincare</li>
                                <li>Diapering</li>
                                <li>Baby Clothing &amp; Shoes</li>
                                <li>Baby &amp; Toddler Toys</li>
                                <li>Baby Foods</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6 className="heading">TOP BRANDS</h6>
                                <li>Mother Care</li>
                                <li>Apple</li>
                                <li>Nike</li>
                                <li>Samsung</li>
                                <li>Tefal</li>
                                <li>L'Oreal Paris</li>
                                <li>Sketchers</li>
                                <li>Silsal</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around">
                <div>
                    <h5>SHOP ON THE GO</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <i className="fa fa-facebook-official mx-2" aria-hidden="true"></i>
                        <i className="fa fa-instagram mx-2" aria-hidden="true"></i>
                        <i className="fa fa-linkedin-square mx-2" aria-hidden="true"></i>
                        <i className="fa fa-twitter mx-2" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="bg-light d-flex d-row justify-content-around align-items-center flex-wrap border-top">
                <div>
                    <p className="text-center pt-3">&copy; 2021 noon. All Right Reserved</p>
                </div>
                <div>
                    <ul className="list-unstyled d-flex d-row flex-wrap justify-content-evenly footerText">
                        <li className="mx-2 mt-2">Carrers</li>
                        <li className="mx-2 mt-2">Warranty Policy</li>
                        <li className="mx-2 mt-2">Sell With Us</li>
                        <li className="mx-2 mt-2">Term of Use</li>
                        <li className="mx-2 mt-2">Term of Sale</li>
                        <li className="mx-2 mt-2">Privacy Policy</li>
                        <li className="mx-2 mt-2">Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
