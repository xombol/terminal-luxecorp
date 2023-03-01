import React, {useEffect, useState} from 'react';
import logo from '../img/black.webp';
import {Link} from "react-router-dom";
import {Weather} from "./blocks/Weather";


export const HeaderMain = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);

        };
    }, []);


    return (
        <header>
            <div className="wrapper">
                <div className='container'>
                    <div className='row justify-content-center pt-4 mb-3'>
                        <div className='col-lg-6'>
                            <div className='header_logo'>
                                <Link to="/" className='logo'>
                                    <img src={logo} alt="Люкскорп"/>
                                </Link>

                                <div className='slogan'>
                                    Центр поддержки<br/>малого и среднего бизнеса
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className="row align-items-center mb-4">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 h5 bg-green rounded-case">
                                        <i className="bi bi-clock"></i>
                                    </div>
                                </div>
                                <div className="col ps-0">
                                    <p className="text-secondary small mb-1">Московское время</p>
                                    <h5 className="fw-medium" id='time'>{date.toLocaleTimeString()}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="row align-items-center mb-4">
                                <div className="col-auto">
                                    <div className="avatar avatar-50 h5 bg-green rounded-case">
                                        <i className="bi bi-thermometer-sun"></i>
                                    </div>
                                </div>
                                <div className="col ps-0">
                                    <p className="text-secondary small mb-1">Погода в Пензе</p>
                                    <h5 className="fw-medium">
                                        <Weather/>
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'></div>
                    </div>
                </div>
            </div>
        </header>

    )
}
