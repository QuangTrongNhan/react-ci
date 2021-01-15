import React from 'react'
import '../assets/css/Header.css'

//create class component
class HeaderPoke extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header-cont">
                <div className="header-col-1">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png" alt="" />
                </div>
                <div className="header-col-2">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png" alt="" />
                </div>
                <div className="header-col-3">
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png" alt="" />
                    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png" alt="" />
                </div>
            </div>
        );
    }
}

export { HeaderPoke }