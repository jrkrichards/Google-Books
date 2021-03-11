import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import ResultsCard from '../components/ResultsCard'
import BooksCard from "../components/BooksCard"
import API from "../utils/API"

const Saved = () => {
    // Setting up the initial state for books
    const [savedBooks, setSavedBooks] = useState([]);
    
    useEffect(() => {
        getBooks()
    }, []);

    const getBooks = async() => {
        API.getBooks()
        .then(res => setSavedBooks(res.data))
        .catch(err => console.log(err))
    }

    const deleteBook = async(id) => {
        API.deleteBook(id)
        .then(getBooks())
        .catch(err => console.log(err))
    }

    const deleteSavedBooks = async (e) => {
        try {
            e.preventDefault();
            const id = await e.target.id
            deleteBook(id)
        } catch (err) {
            console.log(err)
        }
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
                        <ResultsCard>
                            {savedBooks.map((book) => (
                                <BooksCard
                                    bookTitle={book.title}
                                    authors={book.authors}
                                    imgSrc={book.image}
                                    description={book.description}
                                    viewLink={book.link}
                                    btn1Name="View"
                                    btn2Name="Delete"
                                    id={book._id}
                                    onClick={deleteSavedBooks}
                                />
                            ))}
                        </ResultsCard>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Saved