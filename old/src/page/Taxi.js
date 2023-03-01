import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Taxi extends Component {

    render() {

        return (
            <section>
                <div className='container'>
                    <div className='row mt-2 mb-5'>
                        <div className='col-lg-12'>
                            <div className='breadcrumbs'>
                                <Link to="/"><i class="bi bi-arrow-return-left"></i> На главную страницу</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        )
    }
}

export default Taxi