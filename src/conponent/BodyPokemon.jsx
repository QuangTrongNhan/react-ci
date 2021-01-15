import React from 'react'
import '../assets/css/BodyPoke.css'

//create class component
class BodyPoke extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="body-cont">
               <div className="col-1">
                   <div className="header-col-1">Header of col 1</div>
                </div>
               <div className="col-2">col-2</div>
               <div className="col-3">col-3</div>
            </div>

             
        );
    }
}

export{BodyPoke}