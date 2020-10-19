//Data Representation & Querying - Lab 3 - G00363332 - Sünje Alice Winteler
import React from 'react';
import { MovieItem } from './movieitem';
const { Component } = require("react");

//created a Movies class which inherits from Component, used export keyword to export the class
export class Movies extends Component{
    //used render method
    render(){
        //map function and arrow function
        return this.props.movies.map( (movie)=>{
            return <MovieItem movie = {movie}></MovieItem>
        })
            
    }
}