import React, { Component } from 'react';
import axios from "axios";
import './App.css';

import SearchBar from "./components/SearchBar";
import Newslist from "./components/Newslist";


class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      news : []
    }
  }

  searchNews(value){
    const url = "http://hn.algolia.com/api/v1/search?query=";
    axios.get(`${url}${value}`).then(
      response => {
        this.setState({ news: response.data.hits })
      }
    );
  }
  
  render() {
    return (
      <div className="App container">
        <SearchBar searchNews={this.searchNews.bind(this)}/>
        <Newslist news={this.state.news}/>
      </div>
    );
  }
}

export default App;
