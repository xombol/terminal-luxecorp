import React from 'react';

import yandexGo from '../../img/taxi.svg';
import qr from '../../img/qr.webp';
import bottle from '../../img/e15fe8ee-35af-407f-93b6-15e216050589.png';
import {Link} from "react-router-dom";

export const SubBcloks = () => {
    return (
        <div className="history">
            <div className="container">
                <div className="caseline">
                    <Link to='/about'>
                        <div className='caseboxAds wTech'>
                            <h4>Информация <br /> о технопарке</h4>
                            <p className="pt-3">
                                — История технопарка <br />
                                — Контакты <br />
                            </p>
                        </div>
                    </Link>

                    <Link to='/maps'>
                        <div className='caseboxAds maps wTech'>
                            <h4>Карта <br />технопарка</h4>
                            <p className="pt-3" >Актуальный список резидентов технопарка</p>
                        </div>
                    </Link>

                    <div className="line">&nbsp;</div>

                    <div className='caseboxAds boxOne'>
                        <span className="menu-label menu-label-primary">Скоро</span>
                        <h4>QR-код <br /> приложений</h4>
                        <img src={qr} alt="QR-код" className="qr-code" />

                    </div>

                    <div className='caseboxAds boxInfo'>
                        <span className="menu-label menu-label-primary">Скоро</span>
                        <h4>Заказ <br />воды в офис</h4>
                        <img src={bottle} alt="QR-код" className="qr-code" />

                    </div>


                    <div className='caseboxAds taxi'>
                        <span className="menu-label menu-label-primary">Скоро</span>
                        <h4>Вызвать<br />такси</h4>
                        <img src={yandexGo} alt="Яндекс такси" className="tImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
