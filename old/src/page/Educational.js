import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AppIcons from '../assets/img/app.png';


export class Educational extends Component {
    render() {
        return (
            <section className='container start'>
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <h2>Образовательные услуги</h2>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Непрерывное медицинское образование (НМО)</h4>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Высотные<br />работы</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Пожарная<br />безопасность</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Охрана<br />труда</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Промышленная<br />безопасность</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Первая<br />помощь</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Гражданская оборона и чрезвычайные ситуации</h4>
                        </div>
                    </div>

                    <div className='col-lg-3'>
                        <div className='casebox'>
                            <img src={AppIcons} alt="Старт бизнес" />
                            <h4>Рабочие<br />специальности</h4>
                        </div>
                    </div>
                </div>
            </section>







        )
    }
}

export default Educational