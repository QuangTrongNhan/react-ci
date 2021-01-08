import React from 'react'
import '../assets/css/searchBar.css'

//create class component
class SearchBar extends React.Component {
    constructor(pros) {
        super(pros)
    }

    render() {
        return (
            <div className="container">
                <div className="Search">
                    <input type="text" className="search" placeholder="What do you want ?" ></input>
                </div>
                <div className="btn">
                    <button type="submit" value="Search" className="buttonSearch" name="Search">Search</button>
                </div>
            </div>
        )
    }
}

export { SearchBar }