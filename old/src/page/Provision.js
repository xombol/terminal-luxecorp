import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Provision extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Программное обеспечение</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link to="/portal">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Корпоративный портал" />
                                <h4>Корпоративный портал</h4>
                                <p className='price'>от 1 990 ₽</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-lg-3'>
                        <Link to="/soft">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Продукты 1С" />
                                <h4>Продукты 1С</h4>
                                <p className='price'>от 8 890 ₽</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <h2>Офис</h2>
                <div className='row'>

                    <div className='col-lg-3'>
                        <Link to="/pc">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Компьютерная техника" />
                                <h4>Компьютерная техника</h4>
                                <p className='price'>от 24 990 ₽</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-lg-3'>
                        <Link to="/server">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Серверное оборудование" />
                                <h4>Серверное оборудование</h4>
                                <p className='price'>от 20 000 ₽</p>
                            </div>
                        </Link>
                    </div>

                </div>

                <h2>Обслуживание</h2>

                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Ремонт компьютеров" />
                            <h4>Ремонт компьютеров</h4>
                            <p className='price'>от 800 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Обслуживание принтеров" />
                            <h4>Обслуживание принтеров</h4>
                            <p className='price'>от 400 ₽</p>
                        </div>
                    </div>
                </div>

                <h2>Канцелярские товары</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Блокноты" />
                            <h4>Блокноты</h4>
                            <p className='price'>от 580 ₽</p>
                        </div>
                    </div>
                </div>



            </section>
        )
    }
}

export default Provision