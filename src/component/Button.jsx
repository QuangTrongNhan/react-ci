//import react lib into Button.jsx
import React from 'react'
import '../assets/css/light.css'

//create class component
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn:true
        }
    }

    switch() {
        if (this.state.isOn == true) {
            this.setState({isOn: false})
        } else{
            this.setState({isOn: true})
        }
        console.log(this.state.isOn)
    }

    render() {
        return (
            <div className="container">
                <img src={this.state.isOn == true ? 'off.jpg' : 'on.jpg'} alt="bulb" 
                className="image"
                />
                <input type="button" value="are you sure about that?" onClick={() =>this.switch()} 
                className="btn"
                />
            </div>
        )
    }
}

export {Button} 