import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../../assets/img/app.png';


export class BitrixBox extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/bitrix"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Корпоративный портал: Битрикс 24 (Коробочное решение)</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Интернет-магазин + CRM" />
                            <h4>Интернет-магазин + CRM</h4>
                            <p className='infoTarif'>12 пользователей</p>
                            <p className='price'>99 000 ₽</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Корпоративный портал" />
                            <h4>Корпоративный портал</h4>
                            <p className='infoTarif'>50 пользователей</p>
                            <p className='price'>139 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Корпоративный портал" />
                            <h4>Корпоративный портал</h4>
                            <p className='infoTarif'>100 пользователей</p>
                            <p className='price'>199 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Корпоративный портал" />
                            <h4>Корпоративный портал</h4>
                            <p className='infoTarif'>250 пользователей</p>
                            <p className='price'>299 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Корпоративный портал" />
                            <h4>Корпоративный портал</h4>
                            <p className='infoTarif'>500 пользователей</p>
                            <p className='price'>499 000 ₽</p>
                        </div>
                    </div>
 
                </div>

                <h2>Энтерпрайз версия</h2>
                <div className='row'>
                    
 
                    <div className='col-lg-3'>
                        <div className='casebox soon'>
                            <img src={AppIcons} alt="Энтерпрайз" />
                            <span className="menu-label menu-label-primary">Скоро</span>
                            <h4>Энтерпрайз</h4>
                            <p className='infoTarif'>1000 пользователей</p>
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

export default BitrixBox