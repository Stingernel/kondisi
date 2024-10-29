// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import WeatherForm from '../components/WeatherForm';

const Home = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Kefamenanu');

    const fetchWeather = async (cityName) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=04b8ab465488d4fd7859297abf0a4d51&units=metric`);
            if (!response.ok) throw new Error('Failed to fetch weather data');
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeather(null);
        }
    };

    const handleAddWeather = (cityName) => {
        setCity(cityName);
        fetchWeather(cityName);
    };

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    return (
        <div className="bg-gradient-to-b from-blue-600 to-blue-400 min-h-screen flex flex-col justify-center items-center text-white">
            <header className="text-center mb-8">
                <h1 className="text-5xl font-bold">Weather App</h1>
                <p className="text-xl">Stay updated with the latest weather information.</p>
            </header>
            <WeatherForm onAddWeather={handleAddWeather} />
            <div className="flex flex-col items-center justify-center">
                {error ? (
                    <div className="bg-red-500 p-4 rounded-lg shadow-lg">
                        <p>{error}</p>
                    </div>
                ) : (
                    weather && <WeatherCard weather={weather} />
                )}
            </div>
        </div>
    );
};

export default Home;
