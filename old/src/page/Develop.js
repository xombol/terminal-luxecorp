import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Develop extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Интернет-проекты</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Лендинг пейдж" />
                            <h4>Лендинг пейдж</h4>
                            <p className='price'>от 42 500 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Корпоративный сайт" />
                            <h4>Корпоративный сайт</h4>
                            <p className='price'>от 87 900 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Новостной блог" />
                            <h4>Новостной блог</h4>
                            <p className='price'>от 99 400 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Интернет-магазин" />
                            <h4>Интернет-магазин</h4>
                            <p className='price'>от 113 990 ₽</p>
                        </div>
                    </div>


                </div>
                <h2>Программное обеспечение</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Мобильное приложение" />
                            <h4>Мобильное приложение</h4>
                            <p className='price'>от 360 000 ₽</p>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Десктопные приложения" />
                            <h4>Десктопные приложения</h4>
                            <p className='price'>от 480 000 ₽</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Develop