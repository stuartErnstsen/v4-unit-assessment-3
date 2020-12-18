import { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    handleChange = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    handleSearch = () => {
        this.props.filterBooks(this.state.searchInput)
        this.setState({ searchInput: '' })
    }

    handleClear = () => {
        this.props.searchClear()
        this.setState({ searchInput: '' })
    }

    render() {
        return (
            <section id="search">
                <input value={this.state.searchInput} onChange={this.handleChange} />
                <button onClick={this.handleSearch} >SEARCH</button>
                {this.props.bookArr.length < this.props.data.length &&
                    <button onClick={this.handleClear} >Clear</button>
                }

            </section>
        )
    }
}

export default Search;