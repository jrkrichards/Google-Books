import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import BooksCard from "../components/ResultsCard"
import API from "../utils/API"

const Saved = () => {
    // Setting up the initial state for books
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getBooks()
    }, []);

    const getBooks = async() => {
        API.getBooks()
        .then(res => setBooks(res.data))
        .catch(err => console.log(err))
        console.log(books)
    }

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