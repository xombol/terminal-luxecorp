import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Marketing extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Интернет-реклама</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Контектсная реклама" />
                            <h4>Контектсная реклама</h4>
                            <p className='price'>от 10 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="SMM-маркетинг" />
                            <h4>SMM-маркетинг</h4>
                            <p className='price'>от 15 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="SEO-продвижение" />
                            <h4>SEO-продвижение</h4>
                            <p className='price'>от 18 990 ₽</p>
                        </div>
                    </div>
                </div>
                <h2>Медийная реклама</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Наружная реклама" />
                            <h4>Наружная реклама и интерьерная реклама</h4>
                            <p className='price'>от 2 500 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Логотип компании" />
                            <h4>Широкоформантая и интерьерная реклама</h4>
                            <p className='price'>от 2 500 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Логотип компании" />
                            <h4>Брендирование автотранспорта</h4>
                            <p className='price'>от 2 500 ₽</p>
                        </div>
                    </div>
 
                </div>

                <h2>Радио реклама</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Радио реклама" />
                            <h4>Радио реклама</h4>
                            <p className='price'>от 30 000 ₽</p>
                        </div>
                    </div>
 
                </div>
            </section>
        )
    }
}

export default Marketing