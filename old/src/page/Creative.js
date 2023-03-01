import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Creative extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Дизайн</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Разработка дизайна" />
                            <h4>Разработка дизайна</h4>
                            <p className='price'>от 1 500 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Наружная реклама" />
                            <h4>Наружная реклама</h4>
                            <p className='price'>от 1 000 ₽</p>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Типография" />
                            <h4>Типография</h4>
                            <p className='price'>от 1 000 ₽</p>
                        </div>
                    </div>
 


                </div>
                 
            </section>
        )
    }
}

export default Creative