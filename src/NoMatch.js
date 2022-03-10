import React from "react";
import 'bulma/css/bulma.min.css';
import { FaArrowRight, FaFlagCheckered, FaPlane } from 'react-icons/fa';


import error from './assets/error-page-1920-1240.webp';


export const NoMatch = () => (

    <>
        <section className='hero is-fullheight is-family-secondary'
            style={{
                backgroundImage: "url(" + error + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }}>

            <div className='hero-body'>
                <div className='container'>
                    <h1 className='title has-text-black is-family-secondary'>
                        404 - Page Not Found | Harvest
                    </h1>

                    <h4>
                        <span className="icon-text">

                            <span className="icon"> 
                            <FaPlane /> </span><span>London</span>

                            <span className="icon">
                                <FaArrowRight />
                            </span>
                            <span>New York</span>
                            <span className="icon">
                                <FaArrowRight />
                            </span>
                            <span>Istanbul</span>
                            <span className="icon">
                                <FaArrowRight />
                            </span>
                            <span>Paris</span>
                            <span className="icon">
                               <FaFlagCheckered />
                            </span>
                        </span>
                    </h4>

                </div>
            </div>
        </section>

    </>
)
