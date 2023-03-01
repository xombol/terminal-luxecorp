import React from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import BlocksInfo from "../../data/blocks";
import AppIcons from "../../img/app.png";

export const SubCategory = () => {

    const location = useLocation()
    const {key} = location.state

    console.log(key)

    const params = useParams();
    const category_items = BlocksInfo.find(item => item.cat === params.category);
    const sub_category_items = category_items.elements[key].items.find(item => item.cat === params.subcategory);


    console.log(params)
    console.log(category_items)
    console.log(sub_category_items)


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
    console.log(params)

    const blocks = sub_category_items.elements.map((group, index) =>
            <div key={index}>
                <h4><b>{group.group}</b></h4>
                <div className='row'>

                    {
                        group.items.map((block, index) => <>
                            <div className='col-lg-3'>
                                {block.level ?
                                    <Link
                                        to={!block.wait ? '/category/' + params.category + '/' + block.cat : '/category/' + params.category}
                                        state={{data: block}}>
                                        <div className={`casebox ${block.wait ? 'soon' : null}`}>
                                            {block.wait ?
                                                <span className="menu-label menu-label-primary">Скоро</span> : null}
                                            <img src={AppIcons} alt={block.name}/>
                                            <h4 dangerouslySetInnerHTML={{__html: block.name}}/>
                                            <p className='price'>{block.price}</p>
                                        </div>
                                    </Link>

                                    :
                                    <Link to={!block.wait ? '/request' : '/category/' + params.category}
                                          state={{data: block}}>
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
                <Link to={"/category/"+ params.category}>
                    <i className="bi bi-arrow-bar-left"></i>
                </Link>
                <span className={"mx-3"}></span>
                {category_items.title}
            </h2>
            {blocks}
        </section>
    )
}
