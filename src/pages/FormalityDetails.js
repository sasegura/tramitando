import { useParams } from "react-router-dom";
import { FormalitiesContainer } from "../components/tramites/FormalitiesContainer";
import React, {useEffect, useState} from "react";
import {getDetails} from "../service/FormalityService";
import {Page} from "../components/Page";

export const FormalityDetails = () => {
    const { id } = useParams();
    const [formality, setFormality] = useState({name: "", sections: []});

    useEffect(()=>{
        const service = getDetails(id);
        service.then((data) => {setFormality(data)});
    }, []);

    const headerDivStyle = {paddingTop: "40px", paddingBottom: "80px", width: "100%", backgroundColor: "darkblue"};
    const header = <div style={headerDivStyle}>
        <h3 style={{color: "white", textAlign: "center"}}>{formality.name.toUpperCase()}</h3>
    </div>;

    return <Page header={header} content={<FormalitiesContainer data={formality} />}
                 contentStyle={{marginTop: "-40px"}}
    />;
};
