//Data Representation & Querying - Lab 4 - G00363332 - Sünje Alice Winteler
import React from 'react';

//imported Axios
import axios from 'axios';

//imported Movies class
import { Movies } from './movies';
const { Component } = require("react");

//created a Read class which inherits from Component, used export keyword to export the class
export class Read extends Component{

    //used object 'state' to store data associated with this component
    state = {
        //created movies array and added JSON data to array
        //movies is an array of objects
        movies: []
    };

    //lifecycle hook, gets called every time the component is in view
    componentDidMount(){
        //use get method to get data at url
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        //callback functions, then gets executed if the promise is fulfilled, catch if there is an error
        .then((response)=>{
                //updates movies array
                this.setState({
                    movies: response.data.Search
                })
        })
        .catch((error)=>{ 
            console.log(error)
        });
    }

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
