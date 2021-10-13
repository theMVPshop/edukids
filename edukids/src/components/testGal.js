import React, { Component } from 'react'
import GalImages from './GalImages'
import { Col, Container, Row } from 'react-bootstrap';



export default class testGal extends Component {
    render() {

        const images = GalImages.map(image => {
            return <img key={image} src={require(`${image}`)} className="img-responsive" />
        });

        return (
            <Row>
                <Container className="lg-4 md-12 mb-4 mb-lg-0">
                    <Col className="w-100 shadow-1-strong rounded mb-4">
                       { images }
                    </Col>
                </Container>
                    
            </Row>
        )
    }
}
