import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer.js';
import { postData } from './application-data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { // this is the default state
      allPosts: [],
      chosenPosts: []
    }
    this.choosePosts = this.choosePosts.bind(this);
  }
  
  componentDidMount() {
    this.setState({ 
      allPosts: postData,
      chosenPosts: postData
    }); // we add this here to make sure the DOM is loaded before we set the state - prevents synching issues. setState is the reassignment of this.state
  }

  choosePosts(criteria) {
    if (criteria === '') {
      this.setState({
        chosenPosts: this.state.allPosts
      });
    } else {
      const chosenPosts = this.state.allPosts.filter(post => post.username.includes(criteria));
      this.setState({
        chosenPosts: chosenPosts
      });
    }
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">I hate this fucking project</h1>
          <SearchBar posts={this.state.chosenPosts} choosePosts={this.choosePosts} />
        </header>
        <div className='Posts'>
          {this.state.chosenPosts.map((post) => {
            return (
              <PostContainer post={post} />
            )
          })}
      </div>
    </div>
    );
  }
}

export default App;
