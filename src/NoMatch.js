import React from "react";
import 'bulma/css/bulma.min.css';
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

                </div>
            </div>
        </section>

    </>
)
