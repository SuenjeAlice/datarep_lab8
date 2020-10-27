//Data Representation & Querying - Lab 4 - G00363332 - Sünje Alice Winteler
import React from 'react';
const { Component } = require("react");

//created a Create class which inherits from Component, used export keyword to export the class
export class Create extends Component{

    //constructor
    constructor(){
        //
        super();

        //binds
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //state set to blank
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //onChangeTitle with argument e
    onChangeTitle(e){
        //update state
        this.setState({
            Title: e.target.value
        })
    }

    onChangeYear(e){
        //update state
        this.setState({
            Year: e.target.value
        })
    }

    onChangePoster(e){
        //update state
        this.setState({
            Poster: e.target.value
        })
    }

    //onSubmit with argument e
    onSubmit(e){
        //prevents from calling button multiple times
        e.preventDefault();
        alert("Movie: " + this.state.Title);
    }

    //used render method
    render(){
        return(
            <div className='App'>
                {/*Form button called onSubmit which calls onSubmit method*/}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input type='text' className='form-control' value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input type='text' className='form-control' value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <textarea type='text' className='form-control' value={this.state.Poster} onChange={this.onChangePoster}>

                        </textarea>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Movie' className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        );
    }
}
