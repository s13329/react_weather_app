import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


export default class Address extends Component {

    static propTypes = {
        flexDirection : PropTypes.string.isRequired,
    }

    state = {
        loc: ''
    }

    componentDidMount(){
       
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState(() => ({ loc: value }))
    }

    render() {
        const { loc } = this.state;
        const {flexDirection} = this.props;

        return (
            <div className='zipcode-container' style={{ flexDirection: flexDirection }}>
                <input type="text" className="form-control" placeholder="St. George, Utah" value={loc} onChange={this.handleChange} />
                
                <Link
                    className='btn btn-success'
                    style={{margin: 10}}
                    to={{
                        pathname: '/forecast',
                        search: `?city=${loc}`
                    }}>
                    Get Weather
                 </Link>
            </div>

        )

    }
}