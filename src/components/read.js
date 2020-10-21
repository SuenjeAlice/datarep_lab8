//Data Representation & Querying - Lab 3 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported Movies class
import { Movies } from './movies';
const { Component } = require("react");

//created a Read class which inherits from Component, used export keyword to export the class
export class Read extends Component{

    //used object 'state' to store data associated with this component
    state = {
        //created movies array and added JSON data to array
        //movies is an array of objects
        movies: [
            {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
            "Title": "Charlie Wilson's War",
            "Year": "2007",
            "imdbID": "tt0472062",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
            ]
    };

    //used render method
    render(){
        return(
            <div>
                <h1>This is the read component.</h1>
                {/*used Movies and create variable movies and passed informatiion from movies array to it */}
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}
