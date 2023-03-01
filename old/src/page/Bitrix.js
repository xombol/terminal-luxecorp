import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Bitrix extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/portal"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Корпоративный портал: Битрикс 24</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link to="/bitrixCloud">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Облачное решение" />
                                <h4>Облачное решение</h4>
                                <p className='price'>от 23 880 ₽</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-lg-3'>
                        <Link to="/bitrixBox">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Коробочное решение" />
                                <h4>Коробочное решение</h4>
                                <p className='price'>от 99 000 ₽</p>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>
        )
    }
}

export default Bitrix