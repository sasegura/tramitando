import {Button} from "primereact/button";
import React from "react";
import * as tramite from "../service/TramitesService.json";
import {useHistory} from "react-router-dom";

export const Tramites = () => {
    const {tramites, tramitesServices} = tramite;
    const history = useHistory();

    return (
        <div className="p-d-flex p-flex-column p-card-body">

            <h5>Trámites</h5>
            {tramitesServices.map((tramite) => {
                return (
                    <li>
                        <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label}/>
                    </li>
                );
            })}
            <h5>Ayudas</h5>
            {tramites.map((tramite) => {
                return (
                    <li>
                        <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.label}/>
                    </li>
                );
            })}
            <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
        </div>
    );
};
