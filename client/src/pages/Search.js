import React, {useState, useEffect} from 'react'
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Wrapper from '../components/Wrapper';
import SearchCard from '../components/SearchCard'
import ResultsCard from '../components/ResultsCard';
import BooksCard from '../components/BooksCard'
import API from '../utils/API'

const Search = () => {
    // Setting up the initial state for books
    const [books, setBooks] = useState([{
        volumeInfo: {
            title:"Placeholder",
            authors:"Author Placeholder",
            imageLinks: {
                thumbnail:"https://via.placeholder.com/200"
            },
            description: "This is a placeholder description"
            }
        }
    ]);
    
    // useEffect(() => {
    //     getBooks()
    // }, []);

    const searchBooks = async(query) => {
        API.searchBooks(query)
        .then(res => setBooks(res.data.items))
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

    // const getBooks = async() => {
    //     API.getBooks()
    //     .then(res => setBooks(res.data))
    //     .catch(err => console.log(err))
    //     console.log(books)
    // }



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
                                btn="Search"
                                inputId="searchInput"
                                btnId="searchBtn"
                                onClick={submitSearch}
                            /> 
                        </div>             
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <ResultsCard>
                            {books.map((book) => (
                                <BooksCard
                                    bookTitle={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    imgSrc={book.volumeInfo.imageLinks.thumbnail || "https://via.placeholder.com/200"}
                                    description={book.volumeInfo.description}
                                />
                            ))}
                        </ResultsCard>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    )
}

export default Search