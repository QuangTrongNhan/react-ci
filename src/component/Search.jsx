import React from 'react'
import '../assets/css/Search.css'

class Search extends React.Component{
    
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className="search-cont">
                <h1 className="title-search">Search Book</h1>
                <input style={{width:800,height:30}} type="text" className="txtSearch" />
                <button className="btnSearch" value="" >Search</button>
            </div>
        )
    }
}

 

export {Search}