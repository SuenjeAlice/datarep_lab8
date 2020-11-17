//Data Representation & Querying - Lab 6 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported Card from React Bootstrap
import Card from 'react-bootstrap/Card';
const { Component } = require("react");

//created a MovieItem class which inherits from Component, used export keyword to export the class
export class MovieItem extends Component {
    //used render method
    render() {
        return (
            <div>
                {/*Used Card template from React Bootstrap */}
                <Card>
                    {/*used props.movie to access individual movie object, used .Title to access Title of movie object */}
                    <Card.Header>{this.props.movie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            {/* used props.movie to access individual movie object, used .Poster to access Poster of movie object*/}
                            <img src={this.props.movie.poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {/*used props.movie to access individual movie object, used .Year to access Year of movie object */}
                                {this.props.movie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}