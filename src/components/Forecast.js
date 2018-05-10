import React, { Component } from 'react'
import { getWeather } from '../utils/api';
import { parse } from 'query-string'
import Loading from './Loading'



export default class forecast extends Component {

    state = {
        weather: null,
        loading: true,
        city: ''
    }

    async componentDidMount() {
        const { location } = (this.props)
        const city = (parse(location.search).city)
        this.getData(city);
    }

    async componentWillReceiveProps(newProps) {
        const { location } = (newProps)
        const city = (parse(location.search).city)
        this.getData(city);
    }

    async getData(city) {
        this.setState(() => ({ repos: null, loading: true, city:'' }));
        const repos = await getWeather(city);

        if(repos !== null){
            this.setState(() => ({ repos, loading: false, city }))
        }
       
    }

    handleClick(city) {
        this.props.history.push({
          pathname: '/details/' + this.city,
          state: city,
        })
    }


    render() {

        const { repos, city } = this.state;

        return (
            this.state.loading === true
                ? <Loading />
                :
                <div>
                    <h1 className='forecast-header'>{city}</h1>
                    <div className='forecast-container'>
                        {repos.map(function (item, index) {
                            return (
                                <div className='dayContainer' key={index}>
                                    <img className='weather' src={'/images/weather-icons/' + item.weather[0].icon + '.svg'} alt='Weather' />
                                    <h2 className='subheader'>{item.dt_txt}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>

        )
    }
}