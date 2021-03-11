import React from "react";
import {Row, Col} from "../Grid"
import {FormBtn} from '../Form'


function BooksCard(props) {
  return (
      <div className="card bg-light w-100">
          <div className="card-body">
            <Row>
                <Col size="md-9">
                    <h5 className="text-left">{props.bookTitle}</h5>
                    <p className="text-left">{props.authors}</p>
                </Col>
                <Col size="md-3">
                    <FormBtn
                        children={props.btn2Name}
                        onClick={props.onClick}
                        id={props.id}
                    />
                    <FormBtn
                        children={props.btn1Name}
                        link={props.viewLink}
                    />
                </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <img 
                            src={props.imgSrc}
                            alt="https://via.placeholder.com/200"
                            className="img-thumbnail img-fluid img-responsive align-left"
                            style={{width: "auto", height: "auto"}}
                        />
                    </Col>
                    <Col size="md-9">
                        <p className="text-left">{props.description}</p>
                    </Col>
                </Row>
          </div>
      </div>
    )
}

export default BooksCard;
