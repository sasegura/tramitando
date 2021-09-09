import { Button } from "primereact/button";
import React from "react";
import * as tramite from "../service/TramitesService.json";
import { useHistory } from "react-router-dom";
import {SectionTitle} from "../Tramite/components/SectionTitle";
export const Tramites = () => {
    const { tramites, tramitesServices } = tramite;
    const history = useHistory();
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
