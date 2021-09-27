import { Button } from "primereact/button";
import { useHistory, useLocation } from "react-router-dom";
import {getList} from "../service/FormalityService";
import {useEffect, useState} from "react";

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
