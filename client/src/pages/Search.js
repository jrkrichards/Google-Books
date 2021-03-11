import React, {useState} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import SearchCard from '../components/SearchCard'
import ResultsCard from '../components/ResultsCard';
import BooksCard from '../components/BooksCard'
import API from '../utils/API'

const Search = () => {
    // Setting up the initial state for books
    const [books, setBooks] = useState([]);

    const searchBooks = async (query) => {
        API.searchBooks(query)
        .then(res => setBooks(res.data.items))
        .catch(err => console.log(err));
    };

    const saveBook = async (body) => {
        API.saveBook(body)
        .then(alert("Book Saved"))
        .catch(err => console.log(err));
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    const submitSearch = async (e) => {
      try {
        e.preventDefault();
        const query = await document.querySelector('#searchInput').value
        searchBooks(query)
      } catch (error) {
        console.log(error)
      }
    };

    // event handler for when we click the save button
    const saveBookClick = async (e) => {
        try {
          e.preventDefault();
          const targetBook = await books.filter(book => book.id === e.target.id)
          const body = {
            "title": await targetBook[0].volumeInfo.title,
            "authors": await targetBook[0].volumeInfo.authors,
            "description": await targetBook[0].volumeInfo.description,
            "image": "https://via.placeholder.com/200",
            "link": await targetBook[0].volumeInfo.infoLink
          };
          saveBook(body)
        //   saveBook(body)
        } catch (error) {
          console.log(error)
        }
    };

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
                        <div className="py-3">
                            <SearchCard 
                                title="Book Search"
                                subtitle="Book"
                                buttonName="Search"
                                inputId="searchInput"
                                buttonId="searchBtn"
                                onClick={submitSearch}
                            /> 
                        </div>             
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <ResultsCard>
                            {books.length > 0
                            ? books.map((book) => (
                                <BooksCard
                                    bookTitle={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    imgSrc="https://via.placeholder.com/200"
                                    description={book.volumeInfo.description}
                                    viewLink={book.volumeInfo.infoLink}
                                    btn1Name="View"
                                    btn2Name="Save"
                                    id={book.id}
                                    onClick={saveBookClick}
                                />
                            ))
                            : <h1>Search for a Book</h1>}
                        </ResultsCard>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Search