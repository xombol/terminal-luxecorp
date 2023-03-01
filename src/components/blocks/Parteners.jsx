import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
// IMG PARTNERS
import {Autoplay} from "swiper";

import 'swiper/swiper.min.css'
import 'swiper/css/navigation';

import alfabank from '../../img/partner/alfabank.svg';
import sberbank from '../../img/partner/sber.svg';
import modulbank from '../../img/partner/modulbank.svg';
import tinkoff from '../../img/partner/tinkoff.svg';
import vtbbank from '../../img/partner/vtb.svg';
import sdmbank from '../../img/partner/sdm.svg';
import otpbank from '../../img/partner/otpbank.svg';


export const Parteners = () => {
    return (
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
                            <img src={sberbank} width="120" height="35" alt="Сбербанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={alfabank} width="120" height="35" alt="Альфабанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={modulbank} width="120" height="35" alt="Модульбанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tinkoff} width="120" height="35" alt="Тинькофф"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={vtbbank} width="120" height="35" alt="ВТБ банк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sdmbank} width="120" height="35" alt="СДМ Банк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={otpbank} width="120" height="35" alt="ОТП Банк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sberbank} width="120" height="35" alt="Сбербанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={alfabank} width="120" height="35" alt="Альфабанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={modulbank} width="120" height="35" alt="Модульбанк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={tinkoff} width="120" height="35" alt="Тинькофф"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={vtbbank} width="120" height="35" alt="ВТБ банк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sdmbank} width="120" height="35" alt="СДМ Банк"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={otpbank} width="120" height="35" alt="ОТП Банк"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
