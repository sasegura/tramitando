import React, { useEffect } from "react";
import ReactGA from "react-ga";
import {Helmet} from 'react-helmet'
export const Inicio = () => {
    useEffect(() => {
        ReactGA.pageview("/homepage");
    }, []);
    return (
        <>
            <Helmet>
                <title>Tramiteo</title>
                <meta name='description' content={`Tramiteo`}/>
                <meta charSet="utf-8" />
            </Helmet>
            <div className="p-d-flex p-flex-column p-card-body">
                <h5>Inicio Page</h5>
                <p>Página inicial para mostrar el contenido del sitio web.</p>
            </div>
        </>
    );
};
