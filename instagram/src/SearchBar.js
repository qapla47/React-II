import React, { Component } from 'react';

class SearchBar extends Component {
  submitFilter = (event) => {
    const criteria = this.input.value;
    this.props.choosePosts(criteria);
  }
  render() {
    return (
      <div className='SearchBar'>
        <input className='SearchBar-field'
               type='text'
               onChange={this.submitFilter}
               ref={input => this.input = input}
               placeholder='Whatcha lookin for?'>
               </input>
      </div>
    );
  }
}
export default SearchBar;