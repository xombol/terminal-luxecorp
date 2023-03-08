import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import BlocksInfo from "../../data/blocks";
import AppIcons from "../../img/app.png";
import Indicator from "../../img/indicator.svg";

export const SubCategory = () => {

    const [items, setItems] = useState([]);
    const params = useParams();

    let link = '';
    let title_block = '';
    let back_link = '';
    const lvl = Object.keys(params).length;
    let info = {};

    useEffect(() => {
        setItems([])
    }, [params]);

    const filter_data = (array, cat) => {

        let data = [];

        if (Array.isArray(array)) {
            array.forEach((group) => {
                group.items.forEach((elem) => {
                    if (elem.cat === cat) {
                        data.push(elem)
                    }
                })
            })
        }

        return data[0];
    }


    if (lvl === 2) {


        const items_cat1 = BlocksInfo.find(item => item.cat === params.cat1);

        info = filter_data(items_cat1.elements, params.cat2);

        items.push(info)


        title_block +=  items_cat1.title + ' > ' + info.title
        link = '/category/' + params.cat1 + '/' + params.cat2 + '/';
        back_link = '/category/' + params.cat1;


    } else if (lvl === 3) {

        const items_cat1 = BlocksInfo.find(item => item.cat === params.cat1);

        info = filter_data(items_cat1.elements, params.cat2);
        title_block +=  items_cat1.title + ' > ' + info.title

        info = filter_data(info.elements, params.cat3);
        title_block +=   ' > ' + info.title

        items.push(info);


        link = '/category/' + params.cat1 + '/' + params.cat2 + '/' + params.cat3 + '/';
        back_link = '/category/' + params.cat1 + '/' + params.cat2;

    } else if (lvl === 4) {

        const items_cat1 = BlocksInfo.find(item => item.cat === params.cat1);

        info = filter_data(items_cat1.elements, params.cat2);
        title_block +=  items_cat1.title + ' > ' + info.title

        info = filter_data(info.elements, params.cat3);
        title_block +=   ' > ' + info.title
        info = filter_data(info.elements, params.cat4);
        title_block +=   ' > ' + info.title

        items.push(info);


        link = '/category/' + params.cat1 + '/' + params.cat2 + '/' + params.cat3 + '/' + params.cat4 + '/';
        back_link = '/category/' + params.cat1 + '/' + params.cat2 + '/' + params.cat3;

    } else if (lvl === 5) {


        const items_cat1 = BlocksInfo.find(item => item.cat === params.cat1);

        info = filter_data(items_cat1.elements, params.cat2);
        title_block +=  items_cat1.title + ' > ' + info.title

        info = filter_data(info.elements, params.cat3);
        title_block +=   ' > ' + info.title

        info = filter_data(info.elements, params.cat4);
        title_block +=   ' > ' + info.title

        info = filter_data(info.elements, params.cat5);
        title_block +=   ' > ' + info.title

        items.push(info);


        link = '/category/' + params.cat1 + '/' + params.cat2 + '/' + params.cat3 + '/' + params.cat4 + '/' + params.cat5 + '/';
        back_link = '/category/' + params.cat1 + '/' + params.cat2 + '/' + params.cat3 + '/' + params.cat4;


    } else {
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


    if (items == null) {
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

    const blocks = items[0].elements.map((group, index) =>
        <div key={index}>
            <h4><b>{group.group}</b></h4>
            <div className='row'>

                {
                    group.items.map((block, index) => <>
                        <div className='col-lg-3'>
                            {block.level ?
                                <Link
                                    to={!block.wait ? link + block.cat : '/category/' + params.category}
                                >
                                    <div className={`casebox ${block.wait ? 'soon' : null}`}>
                                        {block.wait ?
                                            <span className="menu-label menu-label-primary">Скоро</span> : null}
                                        <img src={AppIcons} alt={block.name}/>
                                        <img src={Indicator} className={"icon_dir"} alt={block.name}/>
                                        <h4 dangerouslySetInnerHTML={{__html: block.name}}/>
                                        <p className="infoTarif">{block.sub_info}</p>
                                        <p className='price'>{block.price}</p>
                                    </div>
                                </Link>

                                :
                                <Link to={!block.wait ? '/request' : link}
                                      state={{data: block, link : link}}>
                                    <div className={`casebox ${block.wait ? 'soon' : null}`}>
                                        {block.wait ?
                                            <span className="menu-label menu-label-primary">Скоро</span> : null}
                                        <img src={AppIcons} alt={block.name}/>
                                        <h4 dangerouslySetInnerHTML={{__html: block.name}}/>
                                        <p className="infoTarif">{block.sub_info}</p>
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
                <Link to={back_link}>
                    <i className="bi bi-arrow-bar-left"></i>
                </Link>
                <span className={"mx-3"}></span>
                {title_block}
            </h2>
            {blocks}
        </section>
    )
}
