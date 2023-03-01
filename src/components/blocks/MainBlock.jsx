import React from 'react';
import {Link} from "react-router-dom";
import AppIcons from "../../img/app.png";

import mainBlockData from '../../data/main_cat'

export const MainBlock = () => {

    const blocks = mainBlockData
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((block, index) =>
            <div className='col-lg-3' key={index}>
                <Link
                    to={{
                        pathname: `/category/${block.data.link}`
                    }}
                >
                    <div className='casebox circle'>
                        <img src={AppIcons} alt="Старт бизнес"/>
                        <h4 dangerouslySetInnerHTML={{__html: block.data.label}}/>
                        <i className="bi bi-arrow-right"></i>
                    </div>
                </Link>
            </div>
        )

    return (
        <section>
            <div className='breadcrumbs home'></div>
            <div className="container">
                <nav className="menu">
                    <div className='row'>
                        {blocks}
                    </div>
                </nav>
            </div>
        </section>
    )
}
