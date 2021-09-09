import { Button } from "primereact/button";
import React from "react";
import * as tramite from "../service/TramitesService.json";
import { useHistory } from "react-router-dom";
import {SectionTitle} from "../Tramite/components/SectionTitle";
import {SectionContent} from "../Tramite/components/SectionContent";
export const Tramites = () => {
    const { tramites, tramitesServices } = tramite;
    const history = useHistory();
    const data = [
                    {
                        "type": "text",
                        "content": "Actualmente, tienes varios...."
                    },
                    {
                        "type": "list",
                        "content": [
                            "Acceder a la web ...",
                            "En la barra de opciones...",
                            "Entre los 8 procedimientos..."
                        ]
                    },
                    {
                        "type": "text",
                        "content": "Desde 2016, puedes...."
                    }
                ];
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    {/*<h5>Trámites</h5>*/}
                    <SectionTitle title="Trámites"/>
                    {tramitesServices.map((tramite) => {
                        return (
                            <li>
                                <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label} />
                            </li>
                        );
                    })}
                    <SectionTitle title="Ayudas"/>
                    {data.map( obj => {
                        return <SectionContent contentData={obj}/>;
                    })
                    }
                    {/*<h5>Ayudas</h5>*/}
                    {tramites.map((tramite) => {
                        return (
                            <li>
                                <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label} />
                            </li>
                        );
                    })}
                    <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
                </div>
            </div>
        </div>
    );
};
