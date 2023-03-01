import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Technopark extends Component {
    render() {
        return (
            <section className='container technopark'>
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <div className='row mt-4 pb-5'>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-7'>
                        <h1>Технопарк инновационных <br />технологий «Яблочков»</h1>
                        <p>Технопарк представляет собой комплекс объектов недвижимости, который создан для осуществления деятельности в области высоких технологий. Комплекс состоит из офисных зданий, производственных и лабораторных помещений, объектов транспортной, инженерной, социальной и жилой инфраструктуры.</p>



                        <h4>Контактная информация</h4>
                        <p>
                            <b>Начальник отдела по обеспечению <br />деятельности технопарка:</b> Кольцов Олег Петрович<br />
                            <b>Контактная информация:</b> +7 (8412) 636-400<br />
                            <b>Почта:</b> pnztp@mail.ru<br />
                        </p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-3'>
                        <div className='count'>2012 г.</div>
                        <span className='info'>Год основания</span>
                    </div>
                    <div className='col-lg-3'>
                        <div className='count'>24</div>
                        <span className='info'>Резидента</span>
                    </div>
                    <div className='col-lg-3'>
                        <div className='count'>96</div>
                        <span className='info'>Всего помещений</span>
                    </div>
                    <div className='col-lg-3'>
                        <div className='count'>4 990.8 м<sup>2</sup></div>
                        <span className='info'>Общая площадь</span>
                    </div>

                </div>
            </section>
        )
    }
}

export default Technopark