import React, {Component} from 'react';
import axios from 'axios';

//https://www.youtube.com/watch?v=hScR513gvNo&t=142s min: 35:36

// components
import Search from "./components/Search";
import PhotosList from "./components/PhotosList";

class App extends Component {
  state = {
    word: '',
    images: [],
    page: ''
  }

  scroll = () => {
    const documento = document.querySelector('.jumbotron');
    documento.scrollIntoView('smoot', 'start');
  }
  // TODO revisar prev imagen and next imagen 
  apiCall = async() => {
    if (this.state.word === '') return null; 
     
    const resp = await axios.get(`https://pixabay.com/api/?key=19841073-a6ab9808e1f6aac50e4909fe7&q=${this.state.word}&per_page=20&page=${this.state.page}`);
    this.setState({ images: resp.data.hits });
  }

  onChange = async(word) => {
    this.setState({ 
      word: word,
      page: 1 
    });
  }

  prevImages = async() => {
    let page = this.state.page; 
    if (page === 1) return null; 

    page -= 1;

    this.setState({
      page 
    });

    await this.apiCall();
    this.scroll();
  }

  nextImages = async() => {
    let page = this.state.page;
    page += 1; 

    this.setState({
      page
    });
    
    await this.apiCall();
    this.scroll();
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Stunning free images & royalty free stock</p>
          <Search
            data={this.state.word}
            onHandleChange={this.onChange}
            call={this.apiCall}
          />
        </div>
        <div className="row justify-content-center">
          <PhotosList
            images={this.state.images}
            prevImages={this.prevImages}
            nextImages={this.nextImages}
          />
        </div>
      </div>
    );
  }
}

export default App;
