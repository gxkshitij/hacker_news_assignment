import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            query: ''
        }
    }
    formSubmit(e){
        e.preventDefault()
        console.log('Form submitted');
        if(this.state.query === ""){
            alert('Sorry, no input');
            return;
        }
        this.props.searchNews(this.state.query);
    }

    onInputChange(value){
        console.log('Search Value is ', value);
        this.setState({ query : value });
    }

    render() {
        return (
             <form onSubmit={this.formSubmit.bind(this)} className="searchBar">
                <input
                    className="form-control"
                    onChange={ event => this.onInputChange(event.target.value)}
                    value={this.state.value}
                    type="text"/>
                   <button className="btn btn-primary" type="submit">Search</button> 
             </form>
        )
    }
    
};

export default SearchBar;