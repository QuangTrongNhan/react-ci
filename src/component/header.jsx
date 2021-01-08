import React from 'react'

class TitleHeader extends React.Component {
    constructor(pros) {
        super(pros)
    }

    render() {
        return (
             <div className="container">
                 <h1>Search Emoji</h1>
             </div>
        )
    }
}

export { TitleHeader }