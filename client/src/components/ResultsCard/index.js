import React from "react";
import BooksCard from '../BooksCard'


function ResultsCard({props, children}) {
    // // funtion to check if there is data in books
    // const dataCheck = async (props) => {
    //     if(props) {
    //         const books = await props.books.items
    //         console.log(books)
    //     } else {
    //         const books = await "No Search"
    //         console.log(books)
    //     }
    // }

    // useEffect(() => {
    //     dataCheck()
    // }, []);
  return (
    <div className="card my-2 bg-light w-100">
      <div className="card-body">
        <h5 className="text-left">Results</h5>
        {children}
      </div>
    </div>
  );
}

export default ResultsCard;
