import {Button} from "primereact/button";
import React from "react";
import {formalities} from "../service/TramitesService"
import {useHistory} from "react-router-dom";

export const Tramites = () => {
    const history = useHistory();

    return (
        <div className="p-d-flex p-flex-column p-card-body">

            <h5>Trámites</h5>
            {formalities.map((tramite) => {
                return (
                    <li>
                        <Button className="p-button-text" onClick={() => history.push(tramite.url)} label={tramite.title}/>
                    </li>
                );
            })}
            <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
        </div>
    );
};
