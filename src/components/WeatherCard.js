// src/components/WeatherCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faCloudRain, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';

const WeatherCard = ({ weather }) => {
    const getWeatherIcon = () => {
        switch (weather.weather[0].main) {
            case 'Clear':
                return faSun;
            case 'Rain':
                return faCloudRain;
            case 'Snow':
                return faSnowflake;
            case 'Clouds':
                return faCloudSun;
            default:
                return faCloudSun;
        }
    };

    return (
        <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full transform transition duration-500 hover:scale-105">
            <h5 className="text-2xl font-bold mb-2">Weather in {weather.name}</h5>
            <FontAwesomeIcon icon={getWeatherIcon()} size="4x" className="mb-4" />
            <h6 className="text-gray-600 text-lg">Current Conditions</h6>
            <p className="text-lg">Temperature: {weather.main.temp}°C</p>
            <p className="text-lg">Weather: {weather.weather[0].description}</p>
            <p className="text-lg">Humidity: {weather.main.humidity}%</p>
            <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;
