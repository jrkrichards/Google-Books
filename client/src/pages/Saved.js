import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import BooksCard from "../components/BooksCard"

const Saved = () => {
    return (
        <Wrapper>
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <h5>Search for and Save Books of Interest</h5>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <BooksCard
                            title="Results"
                            bookTitle="Placeholder"
                            authors="Author"
                        />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Saved