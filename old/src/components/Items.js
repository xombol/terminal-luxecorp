import { Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'

import { Start } from "../page/Start";
import { Develop } from "../page/Develop";
import { Bank } from "../page/Bank";

export class Items extends Component {
    render() {
        return (
            <div className='row mt-5'>
                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <Link to='/start'>
                                <div className='casebox'>
                                    <h4>Старт бизнес</h4>
                                    <p>Бесплатная регистрация бизнеса и открытие расчётного счета</p>
                                </div>
                            </Link>
                        </div>

                        <div className='col-lg-6'>
                            <Link to='/bank'>
                                <div className='casebox'>
                                    <h4>Банковские услуги</h4>
                                    <p>Выгодные условия для развития Вашего бизнеса</p>
                                </div>
                            </Link>
                        </div>

                      
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='caseAdwords'>
                        123
                    </div>
                </div>
            </div>
        )
    }
}

export default Items