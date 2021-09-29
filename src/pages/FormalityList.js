import { Button } from "primereact/button";
import { useHistory, useLocation } from "react-router-dom";
import {getList} from "../service/FormalityService";
import {useEffect, useState} from "react";
import {Page} from "../components/Page";

export const FormalityList = () => {
    const { pathname: url } = useLocation();
    const history = useHistory();
    const [formalities, setFormalities] = useState([]);

    useEffect(()=>{
        const service = getList();
        service.then((data) => {setFormalities(data)});
    }, []);

    const headerDivStyle = {paddingTop: "40px", paddingBottom: "80px", width: "100%", backgroundColor: "darkblue"};
    const header = <div style={headerDivStyle}>
        <h3 style={{color: "white", textAlign: "center"}}>Trámites</h3>
    </div>;
    const content = <div className="p-d-flex p-flex-column p-card-body">
            {formalities.map((tramite, idx) => {
                return (
                    <li key={"formality_"+idx}>
                        <Button className="p-button-text" onClick={() => history.push(`${url}/${tramite.id}`)} label={tramite.name} />
                    </li>
                );
            })}
            <p>Página para mostrar información sobre los tramites que se pueden realizar.</p>
        </div>;

    return (
        <Page header={header} content={content} contentStyle={{marginTop: "-40px"}}/>
    );
};
