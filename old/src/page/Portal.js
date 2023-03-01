import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Portal extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Корпоративный портал</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Link to="/bitrix">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Битрикс 24" />
                                <h4>Битрикс 24</h4>
                                <p className='price'>от 23 880 ₽</p>
                            </div>
                        </Link>
                    </div>

                    <div className='col-lg-3'>
                        <Link to="/amo">
                            <div className='casebox'>
                                <img src={AppIcons} alt="Amo CRM" />
                                <h4>Amo CRM</h4>
                                <p className='price'>от 5 988 ₽</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portal