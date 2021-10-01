import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {ReactComponent as EdukidsLogo} from '../img/edukids_logo.svg';

const Footer = () => {



    return (
        <div className="footer" >
            <Container className="footer-bottom">
                <Row>
                    <Col>
                    <EdukidsLogo className="svg svg-footer"/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <a href="https://www.facebook.com/" className="fa fa-facebook">
                        <FaFacebook />
                    </a>
		            <a href="https://twitter.com/" className="fa fa-twitter">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com/" className="fa fa-instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube">
                        <FaYoutube />
                    </a>
                    </Col>
                    <Col>
                    <h6>EduKids</h6>
                    <ul className="list-unstyled">
                        <li><a href="about">About us</a></li>
                        <li><a href="career">Careers</a></li>
                        <li>News & Articles</li>
                        <li>Legal Notice</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6>Support</h6>
                    <ul className="list-unstyled">
                        <li>Help Center</li>
                        <li><a href="contact">Contact Us</a></li>
                        <li><a href="faq">FAQ</a></li>
                        <li>Parent Community</li>
                    </ul>
                    </Col>
                    <Col>
                    <h6>Contact Information</h6>
                    <ul className="list-unstyled">
                        <li>3557 Derek Drive, Orlando, Florida</li>
                        <li>+1 456-657-887</li>
                        <li>info@domain.com</li>
                    </ul>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                    <p className="text-xs-center" >Copyright &copy;{new Date().getFullYear()} EduKids. All rights reserved</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </div>
    );

};

export default Footer;