import React, { useState, useEffect } from 'react';


function Weather() {
    const [temp, setTemp] = useState('');
    const getWeather = async () => {
        await fetch("https://api.luxecorp.ru/widgets/weather/weather.php?api=shsjh43uvsbdu34gi", {
            method: "GET",
            header: {
                'Content-Type': 'application/www-form-urlencoded',
            },
        })
        .then(response => response.json())
        .then(response => {
            setTemp(response.temp);
        })
    };
    setInterval(getWeather, 5000);

    return (
        <div>
            <span>{temp} <small><sup>0</sup></small>С</span>
        </div>
    )

}

export default Weather