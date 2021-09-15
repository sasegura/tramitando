import React, { useEffect } from "react";
import ReactGA from "react-ga";

export const Inicio = () => {
    useEffect(() => {
        ReactGA.pageview("/homepage");
    }, []);
    return (
        <div className="p-d-flex p-flex-column p-card-body">
            <h5>Inicio Page</h5>
            <p>Página inicial para mostrar el contenido del sitio web.</p>
        </div>

    );
};
