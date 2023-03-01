import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Feedback extends Component {
    render() {
        return (
            <section className="container start">
                <div className='breadcrumbs'><Link to="/"><i class="bi bi-arrow-left-short"></i></Link></div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h4>Название продукта</h4>
                        <p>Описание продукта</p>
                        <p className='priceFeedback'>5555 ₽</p>
                    </div>
                    <div className='col-lg-6'>
                        <form>
                            <h4>Заявка на консультацию</h4>
                            <p>Заполните заявку и персональный менеджер свяжется <br /> с Вами для уточнения информации</p>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <label>Как вас зовут?</label>
                                    <input type="text" name="Name" className='form-control' placeholder="Например: Марк" />
                                </div>
                                <div className='col-lg-8'>
                                    <label>Контактный телефон:</label>
                                    <input type="tel" name="Phone" className='form-control' placeholder="Например: +7 8412 329 565" />
                                </div>
                                <div className='col-lg-8'>
                                    <label>Электронная почта:</label>
                                    <input type="email" name="Email" className='form-control' placeholder="Например: info@luxecorp.ru" />
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
}

export default Feedback