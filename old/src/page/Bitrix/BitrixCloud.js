import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../../assets/img/app.png';


export class BitrixCloud extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/bitrix"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Корпоративный портал: Битрикс 24 (Облачное решение)</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Базовый" />
                            <h4>Базовый</h4>
                            <p className='infoTarif'>5 пользователей</p>
                            <p className='price'>23 880 ₽</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Стандартный" />
                            <h4>Стандартный</h4>
                            <p className='infoTarif'>50 пользователей</p>
                            <p className='price'>67 080 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Профессиональный" />
                            <h4>Профессиональный</h4>
                            <p className='infoTarif'>100 пользователей</p>
                            <p className='price'>134 280 ₽</p>
                        </div>
                    </div>
                </div>

                <h2>Энтерпрайз версия</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>250 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>500 пользователей</p>
                            <p className='price'>575 880 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>1000 пользователей</p>
                            <p className='price'>959 880 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>2000 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>3000 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>4000 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>5000 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>10 000 пользователей</p>
                            <p className='price'>326 280 ₽</p>
                        </div>
                    </div>
                   
                </div>
            </section>
        )
    }
}

export default BitrixCloud