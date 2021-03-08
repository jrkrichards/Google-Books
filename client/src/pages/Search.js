import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import {Input, TextArea, FormBtn} from '../components/Form'
import CardContainer from '../components/CardContainer'

const Search = () => {
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
                        <CardContainer>
                        <h6 className="text-left">Book Search</h6>
                        <form>
                            <Input />
                            <FormBtn>
                                Search
                            </FormBtn>
                        </form>
                        </CardContainer>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Search