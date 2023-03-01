import { Link, Outlet } from "react-router-dom";
import React, { Component } from 'react';
import AppIcons from '../assets/img/app.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
// IMG PARTNERS
import alfabank from '../assets/img/partner/alfabank.svg';
import sberbank from '../assets/img/partner/sber.svg';
import modulbank from '../assets/img/partner/modulbank.svg';
import tinkoff from '../assets/img/partner/tinkoff.svg';
import vtbbank from '../assets/img/partner/vtb.svg';
import sdmbank from '../assets/img/partner/sdm.svg';
import otpbank from '../assets/img/partner/otpbank.svg';
import yandexGo from '../assets/img/taxi.svg';
import qr from '../assets/img/qr.webp';
import bottle from '../assets/img/e15fe8ee-35af-407f-93b6-15e216050589.png';



export class Layout extends Component {
    render() {
        return (
            <section>
                <div className='breadcrumbs home'></div>
                <div className="container">
                    <nav className="menu">
                        <div className='row'>
                            <div className='col-lg-3'>
                                <Link to='/start'>
                                    <div className='casebox circle'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Начало<br />бизнеса</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                            <div className='col-lg-3'>
                                <Link to='/bank'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Банковские<br />услуги</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                            <div className='col-lg-3'>
                                <Link to='/insurance'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Услуги<br />страхования</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>



                            <div className='col-lg-3'>
                                <Link to='/develop'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Отдел<br />разработки</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                            <div className='col-lg-3'>
                                <Link to='/marketing'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Digital-<br />маркетинг</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                            <div className='col-lg-3'>
                                <Link to='/creative'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Креативный<br />отдел</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>


                            <div className='col-lg-3'>
                                <Link to='/provision'>
                                    <div className='casebox'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Обеспечение<br />бизнеса</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                            <div className='col-lg-3'>
                                <Link to='/educational'>
                                    <div className='casebox rostreshenie'>
                                        <img src={AppIcons} alt="Старт бизнес" />
                                        <h4>Образовательные<br />услуги</h4>
                                        <i class="bi bi-arrow-right"></i>

                                    </div>
                                </Link>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="partner">
                    <div className="logo pt-2 pb-4">
                        <div className="container">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={50}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false
                                }}
                                slidesPerView={6}>
                                <SwiperSlide>
                                    <img src={sberbank} width="120" height="35" alt="Сбербанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={alfabank} width="120" height="35" alt="Альфабанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={modulbank} width="120" height="35" alt="Модульбанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={tinkoff} width="120" height="35" alt="Тинькофф" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={vtbbank} width="120" height="35" alt="ВТБ банк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sdmbank} width="120" height="35" alt="СДМ Банк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={otpbank} width="120" height="35" alt="ОТП Банк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sberbank} width="120" height="35" alt="Сбербанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={alfabank} width="120" height="35" alt="Альфабанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={modulbank} width="120" height="35" alt="Модульбанк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={tinkoff} width="120" height="35" alt="Тинькофф" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={vtbbank} width="120" height="35" alt="ВТБ банк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={sdmbank} width="120" height="35" alt="СДМ Банк" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={otpbank} width="120" height="35" alt="ОТП Банк" />
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
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
                <Outlet />
            </section>


        )
    }
}

export default Layout