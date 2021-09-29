import React, {useEffect} from "react";
import ReactGA from "react-ga";
import {Page} from "../components/Page";

export const Inicio = () => {
    useEffect(() => {
        ReactGA.pageview("/homepage");
    }, []);

    const header = <img src={process.env.PUBLIC_URL + "/assets/index_header.jpg"}
                        style={{width: "100%", height: "60vh"}}
    />;
    const content = <div className="p-card-body">
        <h5>Inicio Page</h5>
        <p>Página inicial para mostrar el contenido del sitio web.</p>
    </div>;

    return (
        <>
            <Page header={header} content={content}/>
            {/*<div className={responsiveWidthClasses}>*/}
            {/*    <div className="p-card-header">*/}
            {/*        <img src={process.env.PUBLIC_URL + "/assets/index_header.jpg"}/>*/}
            {/*    </div>*/}
            {/*    <div className="p-d-flex p-flex-column p-card-body">*/}
            {/*        <h5>Inicio Page</h5>*/}
            {/*        <p>Página inicial para mostrar el contenido del sitio web.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};
