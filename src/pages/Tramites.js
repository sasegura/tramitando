import { Button } from "primereact/button";
import React from "react";
import * as tramites from "../service/TramitesService.json";
import { useHistory } from "react-router-dom";
export const Tramites = () => {
    const { tramitesServices } = tramites;
    const history = useHistory();
    return (
        <div className="p-grid">
            <div className="p-col-12 p-d-flex">
                <div className="p-col-1"></div>
                <div className="card p-col-10">
                    <h5>Trámites</h5>

                    {tramitesServices.map((tramite) => {
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
