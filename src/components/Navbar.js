import React from 'react'
import AddressInput from './AddressInput'


export default function Navbar() {
    return (
        <div className='navbar'>
            <h1>Clever Title</h1>
            <AddressInput flexDirection='row'/>
        </div>
    )
}