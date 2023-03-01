import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';

export class Bank extends Component {
    tart
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Расчётный счёт</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Расчётный счёт" />
                            <h4>Расчётный счёт</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Спецсчет для торгов" />
                            <h4>Спецсчет для торгов</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                </div>
                <h2>Кредиты</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Кредит для бизнеса" />
                            <h4>Кредит для бизнеса</h4>
                            <p className='price'>от 2% за подбор кредита</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Кредитная карта" />
                            <h4>Кредитная карта</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Лизинг" />
                            <h4>Лизинг</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Банковская гарантия" />
                            <h4>Банковская гарантия</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                </div>
                <h2>Бизнес-карты</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Дебетовая карта" />
                            <h4>Дебетовая карта</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Кредитная карта" />
                            <h4>Кредитная карта</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Bank