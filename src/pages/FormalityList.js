import { Button } from "primereact/button";
import { useHistory, useLocation } from "react-router-dom";
import {getList} from "../service/FormalityService";
import {useEffect, useState} from "react";
import {Helmet} from 'react-helmet'

export const FormalityList = () => {
    const { pathname: url } = useLocation();
    const history = useHistory();
    const [formalities, setFormalities] = useState([]);

    useEffect(()=>{
        const service = getList();
        service.then((data) => {setFormalities(data)});
    }, []);

    return (
        <div className="p-d-flex p-flex-column p-card-body">
            <Helmet>
                <title>Tramiteo-listado-trámites</title>
                <meta name='description' content={`Listado de trámites en tramiteo.es`}/>
                <meta charSet="utf-8" />
            </Helmet>
            <h5>Trámites</h5>
            {formalities.map((tramite, idx) => {
                return (
                    <li key={"formality_"+idx}>
                        <Button className="p-button-text" onClick={() => history.push(`${url}/${tramite.id}`)} label={tramite.name} />
                    </li>
                );
            })}
            <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
        </div>
    );
};
