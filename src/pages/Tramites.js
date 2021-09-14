import {Button} from "primereact/button";
import React from "react";
import * as tramitesJson from "../service/TramitesService.json";
import {useHistory} from "react-router-dom";
import {SectionTitle} from "../Tramite/components/SectionTitle";
import {FormalitiesContainer} from "../Tramite/components/FormalitiesContainer";

export const Tramites = () => {
    const {tramites, tramitesServices} = tramitesJson;

    const history = useHistory();
    const data = {
        "title": "Firma electrónica",
        "sections": [
            {
                "title": "¿Qué requisitos necesito para renovar el NIE?",
                "contents": [
                    {
                        "type": "text",
                        "content": "La renovación del NIE es uno de los...."
                    }
                ]
            },
            {
                "title": "¿Dónde puedo renovarlo?",
                "contents": [
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
                ]
            }
        ],
        "guided_help": {
            "pageNumber": 4,
            "pages": [
                {
                    "title": "asd",
                    "contents": [
                        {
                            "type": "text",
                            "content": "dasdasd"
                        },
                        {
                            "type": "list",
                            "content": [
                                "asdadasd",
                                "asdasd"
                            ]
                        },
                        {
                            "type": "text",
                            "content": "asdasd"
                        }
                    ]
                }
            ]
        }
    };

    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <FormalitiesContainer data={data}/>
                    <FormalitiesContainer data={data}/>
                    {/*<h5>Trámites</h5>*/}
                    <SectionTitle title="Trámites"/>
                    {tramitesServices.map((tramite) => {
                        return (
                            <li>
                                <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label}/>
                            </li>
                        );
                    })}
                    {/*<SectionTitle title="Ayudas"/>*/}
                    {/*{data.map(obj => {*/}
                    {/*    return <SectionContent contents={obj}/>;*/}
                    {/*})*/}
                    {/*}*/}
                    {/*<h5>Ayudas</h5>*/}
                    {tramites.map((tramite) => {
                        return (
                            <li>
                                <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label}/>
                            </li>
                        );
                    })}

                    <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
                </div>
            </div>
        </div>
    );
};
