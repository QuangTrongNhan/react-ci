import React from 'react'
import '../assets/css/card.css'

//create class component 
//myCard is name of class 
class MyCard extends React.Component {
    constructor(pros) {
        super(pros)
        this.state = {
            isTrue:true
        }
    }

    switch1(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch2(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch3(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch4(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch5(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch6(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch7(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch8(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch9(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch10(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch11(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }
    switch12(){
        if(this.state.isTrue == false){
            this.setState({isTrue:true})
        }
        if(this.state.isTrue == true){
            this.setState({isTrue:false})
        }
    }

    render() {
        return (
            <div className="container">
                <div>
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch1()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch2()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch3()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch4()} 
                    />
                </div>
                <div>
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch5()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch6()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch7()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch8()} 
                    />
                </div>
                <div>
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch9()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch10()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch11()} 
                    />
                    <img src={this.state.isTrue == true ? 'logo192.jpg' : 'pikachu.jpg'} className="image" onClick={() =>this.switch12()} 
                    />
                </div>
            </div>

        )
    }
}

export { MyCard }