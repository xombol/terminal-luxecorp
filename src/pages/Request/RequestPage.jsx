import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const RequestPage = () => {

    const location = useLocation()
    const { data } = location.state


    console.log(data)

    return (
        <section className="container start">

            <div className='row'>
                <div className='col-lg-6'>

                    <h2>
                        <Link to={"/"}>
                            <i className="bi bi-arrow-bar-left"></i>

                        <span className={"mx-3"}></span>
                        Вернуться назад
                        </Link>
                    </h2>

                    <h4>{data.name}</h4>
                    <p>Описание продукта</p>
                    <p className='priceFeedback'>{data.price}</p>
                </div>
                <div className='col-lg-6'>
                    <form>
                        <h4>Заявка на консультацию</h4>
                        <p>Заполните заявку и персональный менеджер свяжется <br/> с Вами для уточнения информации</p>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <label>Как вас зовут?</label>
                                <input type="text" name="Name" className='form-control' placeholder="Например: Марк"/>
                            </div>
                            <div className='col-lg-8'>
                                <label>Контактный телефон:</label>
                                <input type="tel" name="Phone" className='form-control'
                                       placeholder="Например: +7 8412 329 565"/>
                            </div>
                            <div className='col-lg-8'>
                                <label>Электронная почта:</label>
                                <input type="email" name="Email" className='form-control'
                                       placeholder="Например: info@luxecorp.ru"/>
                            </div>
                            <p className='policy'>
                                Отправляя данную форму вы соглашаетесь с политикой
                                конфиденциальности
                            </p>
                            <div className='col-lg-8'>
                                <button type='sumbit' className='btn'>Оставить заявку</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </section>
    )
}
