import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';

export class Start extends Component {

    render() {

        return (
            <section className='container start'>
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Регистрация бизнеса</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link to="/feedback">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Самозанятость" />
                                <h4>Самозанятость (НПД)</h4>
                                <p className='price'>Бесплатно</p>
                            </div>
                        </Link>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Регистрация ИП" />
                            <h4>Регистрация ИП</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Регистрация ООО" />
                            <h4>Регистрация ООО</h4>
                            <p className='price'>Бесплатно</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <img src={AppIcons} alt="Регистрация АО" />
                            <h4>Регистрация АО</h4>
                            <p className='price'>от 10 000 ₽</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <img src={AppIcons} alt="Регистрация ЗАО" />
                            <h4>Регистрация ЗАО</h4>
                            <p className='price'>от 20 000 ₽</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <img src={AppIcons} alt="Регистрация НАО" />
                            <h4>Регистрация НАО</h4>
                            <p className='price'>от 25 000 ₽</p>
                        </div>
                    </div>
                </div>
                <h2>Дополнительные услуги</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <img src={AppIcons} alt="Регистрация товарного знака" />
                            <h4>Регистрация товарного знака</h4>
                            <p className='price'>от 36 000 ₽</p>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Start