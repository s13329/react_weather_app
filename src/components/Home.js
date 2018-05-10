import React, { Component } from 'react'
import AddressInput from './AddressInput'


export default class Home extends Component {
    render() {
        return (
            <div className='home-container' style={{ backgroundImage: 'url("images/pattern.svg")' }}>
                <h1 className='header'>Enter a City and State</h1>
                <AddressInput flexDirection='column'/>
            </div>
        )
    }
}