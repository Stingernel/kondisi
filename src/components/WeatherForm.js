// src/components/WeatherForm.js
import React, { useState } from 'react';

const WeatherForm = ({ onAddWeather }) => {
    const [cityName, setCityName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName.trim()) {
            onAddWeather(cityName);
            setCityName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center mb-6 bg-white rounded-lg shadow-md p-4 w-full max-w-md">
            <input
                type="text"
                placeholder="Enter city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-blue-500"
            >
                Add Weather
            </button>
        </form>
    );
};

export default WeatherForm;
