import React from "react";
import {Row, Col} from "../Grid"
import {FormBtn} from '../Form'


function BooksCard(props) {
  return (
    <div className="card my-2 bg-light w-100">
      <div className="card-body">
        <h5 className="text-left">{props.title}</h5>
            <div className="card bg-light w-100">
                <div className="card-body">
                    <Row>
                        <Col size="md-9">
                            <h5 className="text-left">{props.bookTitle}</h5>
                            <p className="text-left">{props.authors}</p>
                        </Col>
                        <Col size="md-3">
                            <FormBtn
                                btnId={props.saveBtnId}
                                children="Save"
                            />
                            <FormBtn
                                btnId={props.viewBtnId}
                                children="View"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-3">
                            <img 
                                // src={props.imgSrc}
                                src="https://via.placeholder.com/200"
                                alt={props.alt}
                                className="img-thumbnail img-fluid img-responsive align-left"
                                style={{width: "auto", height: "auto"}}
                            />
                        </Col>
                        <Col size="md-9">
                            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            {/* <p>{props.description}</p> */}
                        </Col>
                    </Row>
                </div>
            </div>
      </div>
    </div>
  );
}

export default BooksCard;
