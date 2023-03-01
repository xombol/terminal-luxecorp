import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Start } from "../page/Start";

import { Layout } from '../components/Layout';

export class Item extends Component {
    render() {
        return (
            <div className='col-lg-6'>
                <Link to={this.props.item.link}>
                    <div className='casebox'>
                        <h4>{this.props.item.title}</h4>
                        <p>{this.props.item.desc}</p>
                    </div>
                </Link>
                <Routes>
                    <Route path="/start" element={<Start />} />
                    <Route path="/develop" element={<Develop />} />
                </Routes>
            </div>
        )
    }
}

export default Item