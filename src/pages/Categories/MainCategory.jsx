import React from 'react';
import {Link, useParams} from "react-router-dom";

import BlocksInfo from "../../data/blocks";
import AppIcons from '../../img/app.png';
import Indicator from "../../img/indicator.svg";


export const MainCategory = () => {
    const params = useParams();
    const category_items = BlocksInfo.find(item => item.cat === params.category);

    if (category_items == null) {
        return (
            <section className="container start">


                <h2>
                    <Link to={"/"}>
                        <i className="bi bi-arrow-bar-left"></i>
                    </Link>
                    <span className={"mx-3"}></span>
                    Раздел не найден!
                </h2>
            </section>
        )
    }


    const blocks = category_items.elements
        .map((group, index) =>
            <div key={index}>
                <h4><b>{group.group}</b></h4>
                <div className='row'>

                    {
                        group.items.map((block, index_s) => <>
                            <div className='col-lg-3' key={index_s}>
                                {block.level ?
                                    <Link
                                        to={!block.wait ? '/category/' + params.category + '/' + block.cat : '/category/' + params.category}
                                        state={{key: index, data: block}}>
                                        <div className={`casebox ${block.wait ? 'soon' : null}`}>
                                            {block.wait ?
                                                <span className="menu-label menu-label-primary">Скоро</span> : null}
                                            <img src={AppIcons} alt={block.name}/>
                                            <img src={Indicator} className={"icon_dir"} alt={block.name}/>
                                            <h4 dangerouslySetInnerHTML={{__html: block.name}}/>
                                            <p className='price'>{block.price}</p>
                                        </div>
                                    </Link>

                                    :
                                    <Link to={!block.wait ? '/request' : '/category/' + params.category}
                                          state={{data: block, link: '/category/' + params.category}}>
                                        <div className={`casebox ${block.wait ? 'soon' : null}`}>
                                            {block.wait ?
                                                <span className="menu-label menu-label-primary">Скоро</span> : null}
                                            <img src={AppIcons} alt={block.name}/>
                                            <h4 dangerouslySetInnerHTML={{__html: block.name}}/>
                                            <p className='price'>{block.price}</p>
                                        </div>
                                    </Link>

                                }

                            </div>
                        </>)

                    }


                </div>
            </div>
        )

    return (
        <section className="container start">


            <h2>
                <Link to={"/"}>
                    <i className="bi bi-arrow-bar-left"></i>
                </Link>
                <span className={"mx-3"}></span>
                {category_items.title}
            </h2>
            {blocks}
        </section>
    )
}
