import { Button } from "primereact/button";
import { formalities } from "../service/TramitesService";
import { useHistory, useLocation } from "react-router-dom";

export const TramitesList = () => {
    const { pathname: url } = useLocation();
    const history = useHistory();

    return (
        <div className="p-d-flex p-flex-column p-card-body">
            <h5>Trámites</h5>
            {formalities.map((tramite) => {
                return (
                    <li>
                        <Button className="p-button-text" onClick={() => history.push(`${url}/${tramite.id}`)} label={tramite.name} />
                    </li>
                );
            })}
            <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
        </div>
    );
};
