import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Insurance extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>


                <h2>Автострахование</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Страховой полис ОСАГО" />
                            <h4>Страховой полис ОСАГО</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Страховой полис КАСКО" />
                            <h4>Страховой полис КАСКО</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>

                </div>
                <h2>Страхование бизнеса</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Страхование финансов" />
                            <h4>Страхование финансов</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Страхование имущества" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Страхование имущества</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Страхование грузов" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Страхование грузов</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Жизнь и здоровье" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Жизнь и здоровье</h4>
                            <p className='price'>Индивидуальный расчет</p>
                        </div>
                    </div>
                </div>
       
            </section >
        )
    }
}

export default Insurance