import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class MapsTech extends Component {

    render() {

        return (
            <section className='container'>
                <div className='row mt-2'>
                    <div className='col-lg-12'>
                        <div className='breadcrumbs'>
                            <Link to="/"><i class="bi bi-arrow-return-left"></i> На главную страницу</Link>
                        </div>
                        <div className='row'>

                        </div>
                    </div>
                </div>
                <div className='row'>
                    
                </div>
            </section>
        )
    }
}

export default MapsTech