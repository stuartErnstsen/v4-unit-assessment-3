import { Component } from 'react';
import Header from './Components/Header'
import Search from './Components/Search'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf'
import './App.css';
import data from './data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bookArr: data,
      shelfArr: []
    }
  }

  filterBooks = (input) => {
    this.setState({ bookArr: this.state.bookArr.filter(e => e.title.toLowerCase().includes(input) || e.author.toLowerCase().includes(input)) })
  }

  searchClear = () => {
    this.setState({ bookArr: data })
  }

  addToShelf = (index) => {
    if (!this.state.shelfArr.some(book => book.id === this.state.bookArr[index].id)) {
      this.setState({ shelfArr: [...this.state.shelfArr, this.state.bookArr[index]] })
    }
  }

  removeFromShelf = (index) => {
    this.setState({ shelfArr: this.state.shelfArr.filter((book, i) => i !== index) })
  }

  clearShelf = () => {
    this.setState({ shelfArr: [] })
  }

  render() {
    return (
      <div className="App" >
        <Header />
        <Search searchClear={this.searchClear} filterBooks={this.filterBooks} />
        <main>
          <BookList bookArr={this.state.bookArr} addToShelf={this.addToShelf} />
          <Shelf shelfArr={this.state.shelfArr} clearShelf={this.clearShelf} removeFromShelf={this.removeFromShelf} />
        </main>
      </div>
    );
  }
}

export default App;
