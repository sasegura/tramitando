import {Button} from "primereact/button";
import React from "react";
import * as tramitesJson from "../service/TramitesService.json";
import {useHistory} from "react-router-dom";

export const Tramites = () => {
    const {formalities: tramitesResumen} = tramitesJson;
    const history = useHistory();
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <h5>Trámites</h5>
                    <ul>
                        {tramitesResumen.map((tramite) => {
                            return (
                                <li>
                                    <Button className="p-button-text"
                                            onClick={() => history.push(`${tramite.url}/${tramite.title}`)}
                                            label={tramite.title}/>
                                </li>
                            );
                        })}
                    </ul>
                    <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
                </div>
            </div>
        </div>
    );
};
