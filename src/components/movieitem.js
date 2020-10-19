//Data Representation & Querying - Lab 3 - G00363332 - Sünje Alice Winteler
import React from 'react';
import Card from 'react-bootstrap/Card';
const { Component } = require("react");

//created a MovieItem class which inherits from Component, used export keyword to export the class
export class MovieItem extends Component {
    //used render method
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}